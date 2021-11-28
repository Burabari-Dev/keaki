import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles from '../../../styles/SearchBar.module.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const placeHolderTxt = 'What are you looking for?';

  const doSearch = (keyword) => {
    // setAccountText(keyword || 'Sign In')
  };

  return (
    <div className={styles.Wrapper}>
      <div className='p-inputgroup'>
        <InputText
          placeholder={placeHolderTxt}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
        <Button icon='pi pi-search' onClick={(e) => doSearch(searchText)} />
      </div>
    </div>
  )
}

export default SearchBar;

