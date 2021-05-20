import React, { useContext, useEffect, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { authFetch } from '../utils/api';
import { LoginContext, ThemeContext } from '../utils/contexts';
import {
  PieChart,
} from 'expo-chart-kit'
import white from '@patternfly/react-tokens/dist/js/global_palette_white';

const colorMapper = {
  Low: 'rgba(231, 241, 250, 0.6)',
  Moderate: 'rgba(115, 188, 247, 0.6)',
  Important: 'rgba(0, 102, 204, 0.6)',
  Critical: 'rgba(0, 41, 82, 0.6)'
};

const Advisor = ({ systemId }) => {
  const [data, setData] = useState();
  const config = useContext(LoginContext);
  const { text } = useContext(ThemeContext);
  useEffect(() => {
    (async () => {
      const data = await authFetch(
        `/api/insights/v1/system/${systemId}/reports/`,
        config
      );
      const mapped = data?.reduce((acc, curr) => {
        const currRisk = Object.keys(colorMapper)?.[curr?.rule?.total_risk - 1];
        return {
          ...acc,
          [currRisk]: [
            ...acc?.[currRisk] || [],
            curr
          ]
        }
      }, {})
      setData(Object.entries(mapped || {}).reduce((acc, [ key, val ]) => ({ ...acc, [key]: val.length }), {}));
    })()
  }, []);
  return <View style={{
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: white.value
  }}>
    <Text style={text}>Risks on system found by Insights advisor</Text>
    <PieChart
        data={
          Object.entries(colorMapper).map(([key, color]) => ({
            name: key,
            value: data?.[key] || 0,
            legendFontColor: '#7F7F7F',
            legendFontSize: text.fontSize,
            color
          }))
        }
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="value"
        backgroundColor="rgba(239, 243, 255, 1)"
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
  </View>
};

export default Advisor;
