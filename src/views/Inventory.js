import React, { useEffect, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { LoginContext } from '../utils/loginContext';
import { authFetch } from '../utils/api';
import Header from './Header';

const Inventory = ({ navigation }) => {
  const config = useContext(LoginContext);
  const [data, setData] = useState(); // here should be paginated data
  useEffect(() => {
    (async () => {
      const data = await authFetch(
        '/api/inventory/v1/hosts?per_page=50&page=1&staleness=fresh&staleness=stale&staleness=unknown',
        config
      );
      setData(data);
    })()
  }, []);
  return <View>
      <Header navigation={navigation}/>
      <Text>Inventory</Text>
    </View>;
}

export default Inventory;
