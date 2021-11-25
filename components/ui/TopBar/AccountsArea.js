import React, { useState } from 'react';
import { Button } from 'primereact/button';
import styles from '../../../styles/AccountsArea.module.css';

const AccountsArea = () => {
  const [accountText, setAccountText] = useState('John Doe');

  return (
    <div className={styles.AccountsArea}>
      <Button label={accountText} icon='pi pi-user' />
    </div>
  )
}

export default AccountsArea;
