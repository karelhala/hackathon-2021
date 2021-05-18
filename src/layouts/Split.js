import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SplitItem = ({ style, children, isFill, ...props }) => <View style={{
  ...styles.splitItem,
  ...isFill && styles.fill,
  ...style
}} {...props}>{children}</View>;

export const Split = ({ style, children, ...props }) => <View style={{
  ...styles.split,
  ...style
}} {...props}>{children}</View>;

const styles = StyleSheet.create({
  split: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  splitItem: {},
  fill: {
    flexGrow: 1
  }
});
