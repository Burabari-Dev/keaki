import React, { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AccountsArea from './AccountsArea';
import styles from '../../../styles/TopBar.module.css';
import CartIcon from './CartIcon';

const TopBar = () => {

  return (
    <div className={styles.Wrapper}>
      <Logo />
      <SearchBar />
      <div className={styles.CartAcct} >
        <CartIcon />
        <AccountsArea />
      </div>
    </div>
  )
}

export default TopBar;
