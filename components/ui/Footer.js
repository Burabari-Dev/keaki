import React from 'react';
import styles from '../../styles/common.module.css';

const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  const startYear = 2021;

  return (
    <footer className={styles.Footer}>
      &copy; {copyWrightYear(startYear, year)} Keaki.com
    </footer>
  )
}

export const copyWrightYear = (startYear, currentYear) => {
  const same = startYear == currentYear;
  return `${startYear}`.concat((same ? '' : ` - ${currentYear}`)) 
}

export default Footer;
