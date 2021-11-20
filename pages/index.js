import React, { useEffect, useState } from 'react';
import Layout from '../components/ui/Layout';
import HomePage from '../components/pages/HomePage';

const Home = () => {
  //TODO: App Data Provider initialize here
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    async function getMenus() {
      let { menu_Items } = await import('../dev/data');
      setMenuItems(menu_Items);
      //TODO: Load menuData from server
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

// export async function getServerSideProps() {
//   const isLocal = process.env.IS_LOCAL;
//   return{
//     props: {isLocal: isLocal || null}
//   }
// }
