import { ProvideFirebase } from '../lib/firebase/FirebaseProvider';
// import { ProvideAuth } from "../lib/firebase/AuthProvider";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/globals.css';

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
