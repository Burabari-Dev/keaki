import styles from '../../styles/PromoReel.module.css';

const PromoReel = ({title = 'Promo Products'}) => {
  return(
    <div className={styles.ReelWrapper}>
      <div className={styles.ReelTitle}>
        {title}
      </div>
      <div className={styles.Reel}>

      </div>
    </div>
  )
}

export default PromoReel;
