import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import black from '@patternfly/react-tokens/dist/js/global_palette_black_1000'
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_200';
import Header from './src/views/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 10 }}>
        <Text style={styles.text}>Content</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global_BackgroundColor_200.value
  },
  text: {
    color: black.value
  }
});
