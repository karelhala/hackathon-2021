import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Level = ({ children, style, ...props }) => <View style={{
    ...styles.level,
    ...style
  }}
  {...props}
>{children}</View>

export const LevelItem = ({ children = null, style = {}, ...props }) => <View
  style={{
    ...styles.levelItem,
    ...style,
  }}
  {...props}
>{children}</View>;

const styles = StyleSheet.create({
  level: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  levelItem: {}
});
