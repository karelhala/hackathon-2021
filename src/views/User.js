import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { LoginContext } from '../utils/loginContext';
import Header from './Header';

const User = ({ navigation }) => {
  const config = useContext(LoginContext);
  return <View>
    <Header navigation={navigation}/>
    <Text>User: {config.identity.user.username}</Text>
  </View>;
}

export default User;
