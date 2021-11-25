import React, { useState, useEffect } from 'react';
import Banner from '../ui/Banner';
import styles from '../../styles/HomePage.module.css';
import PromoReel from '../ui/PromoReel';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getDevData() {
      const { Prod_Reel_Data } = await import('../../dev/data');  //TODO:Products data should come from server db
      setProducts(Prod_Reel_Data);
    };
    getDevData();
  }, [products]);

  return (
    <div className={styles.HomePage}>
      <Banner />
      <PromoReel title='Electronics' productsData={products} />
      <PromoReel title='Computers' productsData={products} />
      <PromoReel title='Mobile Phones' productsData={products} />
    </div>
  )
}

export default HomePage;
