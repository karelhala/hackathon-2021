import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import global_BackgroundColor_100 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_100';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Header</Text>
      </View>
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
    backgroundColor: global_BackgroundColor_100.value
  },
  text: {
    color: global_Color_100.value
  }
});
