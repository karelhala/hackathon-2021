import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { exact } from '../components/Date';
import { ThemeContext } from '../utils/contexts';
import Vulnerability from './Vulnerability';
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_200';

const InventoryDetail = ({ id, lastSeen, style, ...props }) => {
  const { whiteText } = useContext(ThemeContext);
  return <View style={{
    ...styles.wrapper,
    backgroundColor: global_BackgroundColor_200.value,
    flex: 1,
    ...style,
  }} {...props}>
    <View style={{ backgroundColor: 'rgba(3, 3, 3, 0.32)' }}>
      <View style={styles.info}>
        <Text style={{...styles.header, ...whiteText}}>UUID:</Text>
        <Text style={{...styles.content, ...whiteText}}>{id}</Text>
      </View>
      <View style={styles.info}>
        <Text style={{...styles.header, ...whiteText}}>Last seen:</Text>
        <Text style={{...styles.content, ...whiteText}}>{exact(new Date(lastSeen))} UTC</Text>
      </View>
    </View>
    <ScrollView style={{ flex: 1 }}>
        <Vulnerability systemId={id} />
    </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'stretch',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  header: {
    width: '25%',
    paddingRight: 5,
  },
  content: {
    flexGrow: 3,
  },
});

export default InventoryDetail;
