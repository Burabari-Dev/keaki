import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import styles from '../styles/Init.module.css';

const Init = () => {
  return (
    <>
    <Container>
      <Header title='Initial Marketplace Setup' />
      <h1 className={styles.Title}>
        Welcome to <a href="https://keaki.com">Initialization Page!</a>
      </h1>
    </Container>
    <Footer/>
    </>
  )
}

export default Init;
