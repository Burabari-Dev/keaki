import React, { useEffect, useState } from 'react';
import Layout from '../components/ui/Layout';
import HomePage from '../components/pages/HomePage';

const Home = ({isLocal}) => {
  //TODO: App Data Provider initialize here
  const [menuItems, setMenuItems] = useState();
  
  useEffect(() => {
    async function getMenus() {
      if (isLocal === 'true') {
        let { menu_Items } = await import('../../dev_data/data');
        setMenuItems(menu_Items);
      } else {
        //TODO: Load menuData from server
      }
    }
    getMenus();
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

export async function getServerSideProps() {
  const isLocal = process.env.IS_LOCAL;
  return{
    props: {isLocal: isLocal || null}
  }
}
