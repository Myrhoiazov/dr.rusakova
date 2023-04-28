
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import s from './BasketBadge.module.scss'

function BasketBadge() {
  return (
    <div className={s.wrapper}>
      <ShoppingBasketIcon className={s.icon}/>
    </div>
  );
}


export default BasketBadge;
