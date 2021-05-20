import React, { useContext, useEffect, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { authFetch } from '../utils/api';
import { LoginContext, ThemeContext } from '../utils/contexts';
import {
  PieChart,
} from 'expo-chart-kit'
import white from '@patternfly/react-tokens/dist/js/global_palette_white';

const colorMapper = {
  Enhancement: 'rgba(149, 213, 142, 0.6)',
  Bugfix: 'rgba(91, 163, 82, 0.6)',
  Security: 'rgba(30, 79, 24, 0.6)'
};

const Patch = ({ systemId }) => {
  const [data, setData] = useState();
  const config = useContext(LoginContext);
  const { text } = useContext(ThemeContext);
  useEffect(() => {
    (async () => {
      const { data } = await authFetch(
        `/api/patch/v1/systems/${systemId}/advisories?limit=-1`,
        config
      );
      const mapped = data?.reduce((acc, curr) => {
        const currRisk = Object.keys(colorMapper)?.[curr?.attributes?.advisory_type - 1];
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
    <Text style={text}>Available patch advisories for this system</Text>
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

export default Patch;
