import { useEffect, useState } from 'react';
import Layout from '../components/ui/Layout';

const Administer = () => {
  const [menuItems, setMenuItems] = useState();

  useEffect(async () => {
    async function getMenus() {
      let { keaki_Admin_Menus } = await import('../dev/data');
      setMenuItems(keaki_Admin_Menus);
      //TODO: Load menuData from server
    }
    getMenus();
  }, [menuItems]);

  return (
    <>
      <Layout pageTitle='Keaki Admin' menuData={menuItems} >

      </Layout>
    </>
  )
}

export default Administer;

// export async function getServerSideProps() {
//   const isLocal = process.env.IS_LOCAL;
//   return {
//     props: { isLocal: isLocal || null }
//   }
// }
