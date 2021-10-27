import { useState } from 'react';
import Header from '../components/ui/Header';
import Container from '../components/ui/Container';
import { useFirebase } from '../lib/firebase/FirebaseProvider';
import styles from '../styles/SignIn.module.css';

const Sign_In = () => {
  const ctx = useFirebase();
  const user = ctx.user;
  const regAccEmail = ctx.regAccEmail;
  const emailSignIn = ctx.emailSignIn;
  const googleSignIn = ctx.googleSignIn;

  const [showEmailSignIn, setShowEmailSignIn] = useState(false);

  return (
    <Container>
      <Header title='Sign-In | Sign-Up' />
      {showEmailSignIn
        ?
        <div className={styles.Wrapper}>
          <input className={styles.Input} type='email' placeholder='email address' />
          <input className={styles.Input} type='password' placeholder='**********' />
          {/* <button className={styles.Button}>Create New Account</button> */}
          <span style={{ fontSize: 'smaller' }}>----------- New to Keaki.com? -----------</span>
          <button className={styles.Button} onClick={() => emailSignIn()}>Create New Account</button>
          <button className={styles.Button} onClick={() => setShowEmailSignIn(false)}>Go Back</button>
        </div>
        :
        <div className={styles.Wrapper}>
          <h4 className={styles.Title}>Sign in with:</h4>
          <div className={styles.Options}>
            <button className={styles.Button} onClick={() => setShowEmailSignIn(true) }>Email</button>
            <button className={styles.Button} onClick={googleSignIn}>Google</button>
            <button className={styles.Button}>Microsoft</button>
            <button className={styles.Button}>Yahoo</button>
            <button className={styles.Button}>Facebook</button>
            <button className={styles.Button}>Twitter</button>
          </div>
        </div>}
    </Container>
  )
}

export default Sign_In;
