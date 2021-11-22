import React from 'react';
import Banner from '../ui/Banner';
import styles from '../../styles/HomePage.module.css';
import PromoReel from '../ui/PromoReel';

const HomePage = () => {
  /**DATA POINTS
   * 
   * {
   *  Electronics: [{pix: 'url', price: '3.99', dprice: '3.50', rating: ''}],
   *  Computers: {},
   *  Mobile Phones: {},
   * }
   */
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
