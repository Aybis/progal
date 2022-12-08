import React, { useEffect } from 'react';
import progalApi from '../../../Middleware/progal-api';

export default function Index() {
  const testItem = async () => {
    const res = await progalApi.listItem();
    console.log(res);
  };

  useEffect(() => {
    testItem();
  }, []);

  return <div>Form BoQ</div>;
}
