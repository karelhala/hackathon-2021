import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import black from '@patternfly/react-tokens/dist/js/global_palette_black_1000'
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_200';
import Login from './src/components/Login';
import { LoginContext } from './src/utils/loginContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import User from './src/views/User';
import Inventory from './src/views/Inventory';

const Drawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState();
  return (
    <View style={styles.container}>
        {user ? <LoginContext.Provider value={user}>
          <NavigationContainer >
            <Drawer.Navigator drawerPosition="right" initialRouteName="Inventory">
              <Drawer.Screen name="Inventory" component={Inventory} />
              <Drawer.Screen name="User" component={User} />
            </Drawer.Navigator>
          </NavigationContainer>
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
