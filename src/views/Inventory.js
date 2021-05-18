import React, { useEffect, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { LoginContext } from '../utils/loginContext';
import { authFetch } from '../utils/api';
import Header from './Header';
import Table from '../components/Table';

const Inventory = ({ navigation }) => {
  const config = useContext(LoginContext);
  const [data, setData] = useState(); // here should be paginated data
  useEffect(() => {
    (async () => {
      const data = await authFetch(
        '/api/inventory/v1/hosts?per_page=50&page=1&order_by=updated&order_how=DESC&staleness=fresh&staleness=stale&&registered_with=insights&fields%5Bsystem_profile%5D%5B%5D=operating_system',
        config
      );
      setData(data);
    })()
  }, []);
  return <View>
      <Header navigation={navigation}/>
      <View>
        {data ? <Table header={['Name', 'Last seen']} rows={data.results.map(({ display_name, created }) => ([
          display_name,
          created
        ]))}/>: <Text>Loading!</Text>}
      </View>
    </View>;
}

export default Inventory;
