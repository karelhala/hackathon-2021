import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../utils/loginContext';
import { authFetch } from '../utils/api';

const Inventory = () => {
  const config = useContext(LoginContext);
  const [data, setData] = useState(); // here should be paginated data
  useEffect(() => {
    const data = await authFetch(
      '/api/inventory/v1/hosts?per_page=50&page=1&staleness=fresh&staleness=stale&staleness=unknown',
      config
    );
    setData(data);
  }, []);
  return <div>aaa</div>;
}
