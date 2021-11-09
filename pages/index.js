import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image'
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import styles from '../styles/Home.module.css';
import TopBar from '../components/ui/TopBar/TopBar';

export default function Home() {

  return (
    <>
      <Container>
        <Header />
        <main className={styles.main}>
          <TopBar/>
          <h1 className={styles.title}>
            Welcome to <a href="https://keaki.com">Homegage!</a>
          </h1>

        </main>
      </Container>
      <Footer />
    </>
  )
}
