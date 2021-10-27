import { ProvideFirebase } from '../lib/firebase/FirebaseProvider';
// import { ProvideAuth } from "../lib/firebase/AuthProvider";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProvideFirebase>
      {/* <ProvideAuth> */}
        <Component {...pageProps} />
      {/* </ProvideAuth> */}
    </ProvideFirebase>
  )
}

export default MyApp
