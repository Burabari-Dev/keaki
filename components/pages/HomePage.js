import React from 'react';
import Banner from '../ui/Banner';
import styles from '../../styles/HomePage.module.css';
import PromoReel from '../ui/PromoReel';

const HomePage = () => {
  return(
    <div className={styles.HomePage}>
      <Banner />
      <PromoReel title='Electronics' />
      <PromoReel title='Computers' />
      <PromoReel title='Mobile Phones' />
    </div>
  )
}

export default HomePage;
