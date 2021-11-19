import React, { useEffect, useState } from 'react';
import Layout from '../components/ui/Layout';
import HomePage from '../components/pages/HomePage';

const Home = () => {
  //TODO: App Data Provider initialize here
  const [menuItems, setMenuItems] = useState();

  useEffect(async () => {
    const isDev = process.env['NODE_ENV'].toLowerCase() === 'development';
    if (isDev) {
      let { menu_Items } = await import('../../dev_data/data.js');
      setMenuItems(menu_Items);
    } else {
      //TODO: Load menuData from server
    }
  }, [menuItems]);

  return (
    <>
      <Layout pageTitle={null} menuData={menuItems} >
        <HomePage />
      </Layout>
    </>
  )
}

export default Home;
