import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import black from '@patternfly/react-tokens/dist/js/global_palette_black_1000'
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_200';
import Header from './src/views/Header'
import Login from './src/components/Login';
import { LoginContext } from './src/utils/loginContext';

export default function App() {
  const [user, setUser] = useState();
  return (
    <View style={styles.container}>
        {user ? <LoginContext.Provider value={user}>
          <Header />
          <View style={{ flex: 10 }}>
            <Text style={styles.text}>Content</Text>
          </View>
        </LoginContext.Provider> :
        <Login onLogin={setUser}/>
        }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: global_BackgroundColor_200.value
  },
  text: {
    color: black.value
  }
});
