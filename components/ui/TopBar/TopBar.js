import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles from '../../../styles/TopBar.module.css';

const TopBar = () => {
  const [searchText, setSearchText] = useState('');
  const [accountText, setAccountText] = useState('Sign In');
  const placeHolderTxt = 'What are you looking for?';

  const doSearch = (keyword) => {
    // setAccountText(keyword || 'Sign In')
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoArea}>
        <img src='/images/logos/logo_18.png' alt='logo-main' />
      </div>
      <div className={styles.SearchArea}>
        <div className='p-inputgroup'>
          <InputText placeholder={placeHolderTxt} value={searchText}
            onChange={(e) => setSearchText(e.target.value)} />
          <Button icon='pi pi-search' onClick={(e) => doSearch(searchText)} />
        </div>
      </div>
      <div className={styles.AccountsArea}>
        <Button label={accountText} icon='pi pi-user' />
      </div>
    </div>
  )
}

export default TopBar;
