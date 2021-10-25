import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image'
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  let isInit = false;

  return (
    <>
      <Container>
        <Header />
        
        {isInit
          ?
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://keaki.com">Homegage!</a>
            </h1>

          </main>
          :
          <h1>
            <Link href='/init'>Initialize app</Link>
          </h1>
        }

      </Container>
      <Footer/>
    </>
  )
}
