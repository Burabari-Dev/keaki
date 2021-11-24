import styles from '../../styles/ProductCard.module.css';

const ProductCard = ({ pixUrl, name = 'Product Name', price = '3.99', xtra = 'Only 10 items left' }) => {
  return (
    <div className={styles.Wrapper} >
      <div className={styles.Pix} >
        <img src={pixUrl || './images/ph.png'} alt='image' />
      </div>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Price}>{price}</div>
      <div className={styles.Xtra}>{xtra}</div>
    </div>
  )
}

export default ProductCard;
