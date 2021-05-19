import React from 'react';
import { View, StyleSheet } from 'react-native';

export const StackItem = ({ style, isFill, children, ...props }) => {
  return <View
    style={{
      ...styles.stackItem,
      ...isFill && styles.fill,
      ...style
    }}
    {...props}
  >
    {children}
  </View>;
};

export const Stack = ({ style, children, ...props }) => {
  return <View
  style={{
    ...styles.stack,
    ...style
  }}
  {...props}
  >
    {children}
  </View>
}

const styles = StyleSheet.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  stackItem: {},
  fill: {
    flexGrow: 1
  }
});
