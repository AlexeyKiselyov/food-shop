import formatPrice from '../../../utils/priceFormatter';
import { FooterCart, FooterCartCount } from './CartFooter.styled';

export const CartFooter = ({ total }) => {
  const { count, price } = total;

  return (
    <FooterCart>
      <FooterCartCount>{count} од.</FooterCartCount>
      <div className="cart-footer__price">
        {formatPrice(price)} грн. - сумма до сплати
      </div>
    </FooterCart>
  );
};
