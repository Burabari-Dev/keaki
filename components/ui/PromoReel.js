import { useEffect, useState } from 'react';
import styles from '../../styles/PromoReel.module.css';
import ProductCard from './ProductCard';

const PromoReel = ({ title = 'Promo Products', productsData = [] }) => {
  const [products, setProducts] = useState(productsData);
  
  //TODO: comment out useEffect for Production Release
  //-> Use development data for testing before server data is created
  useEffect(() => {
    async function getDevData() {
      const {Prod_Reel_Data} = await import('../../dev/data');
      setProducts(Prod_Reel_Data);
    };
    if(!productsData || productsData.length < 1 ) getDevData();
  }, [products]);

  return (
    <div className={styles.ReelWrapper}>
      <div className={styles.ReelTitle}>
        {title}
      </div>
      <div className={styles.Reel}>
        {products.map((p) => <ProductCard 
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
