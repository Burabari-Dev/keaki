import { createContext, useContext, useState } from 'react';
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { app_config } from './config';


const app = initializeApp(app_config);

const ctx = createContext();

/**
 * 
 * @returns {{user, regAccEmail, emailSignIn, googleSignIn}}
 */
const useFirebase = () => {
  return useContext(ctx);
}

const ProvideFirebase = ({ children }) => {
  const ctx_value = useProvideFirebase();
  return (
    <ctx.Provider value={ctx_value}>
      {children}
    </ctx.Provider>
  )
}

const useProvideFirebase = () => {
  const [user, setUser] = useState(null);
  const [errTitle, setErrTitle] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const doRegAccEmail = (email, pass) => {
    regAccEmail(email, pass, setUser, setErrTitle, setErrMsg)
  }

  const emailSignIn = () => {
    const provider = new EmailAuthProvider();
    popupSignIn(provider, setUser, setErrTitle, setErrMsg);
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    popupSignIn(provider, setUser, setErrTitle, setErrMsg)
  }

  return ({
    user,
    regAccEmail: doRegAccEmail,
    emailSignIn,
    googleSignIn
  })
}

//-> AUTHENTICATION FUNCTIONALITIES

const regAccEmail = (email = 'jd@mail.com', pass = 'Doe', setUser, setErrTitle, setErrMsg) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, pass)
    .then(creds => setUser(creds.user))
    .catch(err => {
      setErrTitle('Error creating user account by email');
      setErrMsg(`CODE:${err.code} MESSAGE:${err.message}`);
    })
}

// const emailSignIn = (email = 'jd@mail.com', pass = 'Doe', setUser, setErrTitle, setErrMsg) => {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, pass)
//     .then(creds => setUser(creds.user))
//     .catch(err => {
//       setErrTitle('Error creating user account by email');
//       setErrMsg(`CODE:${err.code} MESSAGE:${err.message}`);
//     })
// }

const popupSignIn = (provider, setUser, setErrTitle, setErrMsg) => {
  // const provider = provider ? provider : new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then(creds => setUser(creds.user))
    .catch(err => {
      setErrTitle('Error creating user account by email');
      setErrMsg(`CODE:${err.code} MESSAGE:${err.message}`);
    })
}



//-> DATABASE (FIRESTORE) FUNCTIONALITIES



//-> PRIMARY EXPORTS
export { useFirebase, ProvideFirebase }
