import React from 'react';
import Layout from '../components/ui/Layout';
import HomePage from '../components/pages/HomePage';
import { Menu_Items as data } from "../../dev_data/data"; //TODO: Remove this later

const Home = () => {
  //TODO: App Data Provider initialize here
  return (
    <>
      <Layout pageTitle={null} menuData={data} >
        <HomePage/>
      </Layout>
    </>
  )
}

export default Home;
