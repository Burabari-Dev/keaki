import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import MainMenu from './MainMenu';
import TopBar from './TopBar/TopBar';
import styles from '../../styles/common.module.css';

const Layout = ({ children, pageTitle, menuData }) => {
  return (
    <>
      <Header title={pageTitle} />
      <Container>
        <TopBar/>
        <div className={styles.Content} >
          <MainMenu data={menuData} />
          {children}
        </div>
      </Container>
      <Footer/>
    </>
  )
}

export default Layout;
