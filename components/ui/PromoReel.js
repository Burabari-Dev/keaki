import styles from '../../styles/PromoReel.module.css';
import ProductCard from './ProductCard';

const PromoReel = ({ title = 'Promo Products', productsData = [] }) => {
  
  return (
    <div className={styles.ReelWrapper}>
      <div className={styles.ReelTitle}>
        {title}
      </div>
      <div className={styles.Reel}>
        {productsData.map((p) => <ProductCard 
          key={p.index} 
          pixUrl={p.url} 
          name={p.name} 
          price={p.price} 
          xtra={p.xtra} />)}
      </div>
    </div>
  )
}

export default PromoReel;
