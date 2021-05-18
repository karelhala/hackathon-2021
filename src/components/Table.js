import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import white from '@patternfly/react-tokens/dist/js/global_palette_white';

const Table = ({ rows, header, style }) => {
  return <FlatList
    style={{
      ...styles.table,
      ...style
    }}
    data={rows}
    renderItem={({ item: { data } }) => (
      <View style={{ ...styles.row }}>
       {header.map((cell, cellKey) => <View key={cellKey} style={{
        ...styles.cell,
        ...cellKey === 0 && styles.first
        }}>
          <View style={{...styles.header}}>{typeof cell === 'string' ? <Text style={{ fontWeight: '700' }}>{cell}</Text> : cell}</View>
          <View style={{...styles.content}}>{typeof data?.[cellKey] === 'string' ? <Text>{data?.[cellKey]}</Text> : data?.[cellKey] || ''}</View>
          <View style={{...styles.break}}/>
        </View>)}
      </View>
    )}
    keyExtractor={item => item.id}
  />;
};

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    // marginBottom: 100
  },
  row: {
    backgroundColor: white.value,
    margin: 5,
    paddingLeft: 15
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginBottom: 10,
  },
  header: {
    width: '30%',
    paddingRight: 5,
  },
  content: {
    flexGrow: 3,
  },
  break: {
    display: 'none',
    width: '100%'
  },
  first: {
    marginTop: 10
  }
});


export default Table;
