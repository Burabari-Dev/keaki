import { useEffect, useState } from 'react';
import Layout from '../components/ui/Layout';

const Administer = () => {
  const [menuItems, setMenuItems] = useState();

  useEffect(async () => {
    const isDev = process.env['NODE_ENV'].toLowerCase() === 'development';
    if (isDev) {
      let { keaki_Admin_Menus } = await import('../../dev_data/data');
      setMenuItems(keaki_Admin_Menus);
    } else {
      //TODO: get menuItems from server
    }
  }, [menuItems]);

  return (
    <>
      <Layout pageTitle='Keaki Admin' menuData={menuItems} >

      </Layout>
    </>
  )
}

export default Administer;
