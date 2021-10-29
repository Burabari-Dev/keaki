import { useRouter } from 'next/router';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import styles from '../styles/Init.module.css';


const Init = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <Header title='Initial Marketplace Setup' />
        <h1 className={styles.Title}>
          Welcome to <a href="https://keaki.com">Initialization Page!</a>
          <br />
          <button onClick={() => router.push('/sign-in') }>Sign In</button>
        </h1>
      </Container>
      <Footer />
    </>
  )
}

export default Init;
