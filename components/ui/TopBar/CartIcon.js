import { Button } from 'primereact/button';
import styles from '../../../styles/CartIcon.module.css';

const CartIcon = ({itemCount = 0}) => {

  return(
    <div className={styles.Wrapper} data-testid='cart'>
      <Button 
        icon="pi pi-shopping-cart" 
        className="p-button-rounded p-button-text p-button-plain" />
      {
        itemCount > 0 
          ? <div className={styles.Badge} >{itemCount}</div>
          : null
      }
      
    </div>
  )
}

export default CartIcon;
