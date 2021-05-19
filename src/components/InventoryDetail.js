import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exact } from '../components/Date';
const InventoryDetail = ({ id, lastSeen, style, ...props }) => {
  return <View style={{
    ...styles.wrapper,
    ...style,
  }}>
    <View>
      <View style={styles.info}>
        <Text style={styles.header}>UUID:</Text>
        <Text style={styles.content}>{id}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.header}>Last seen:</Text>
        <Text style={styles.content}>{exact(new Date(lastSeen))} UTC</Text>
      </View>
    </View>
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
