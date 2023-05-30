import { useSelector } from 'react-redux';
import { selectOrder } from '../../../redux/cart/cartSelectors';

import { useMedia } from 'react-use';

import { GiShoppingCart } from 'react-icons/gi';

import { CartCoutner, Li, NavLinkStyled, Ul } from './Nav.styled';

export const Nav = ({ onClose }) => {
  const isNotDesctop = useMedia('(max-width: 1279px)');

  const order = useSelector(selectOrder);
  const ordersQuantity = order.reduce((acc, product) => {
    return acc + product.count;
  }, 0);

  return (
    <>
      <Ul>
        <Li>
          <NavLinkStyled to="/" onClick={onClose}>
            ГОЛОВНА
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/dishes/all" onClick={onClose}>
            МАГАЗИН
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/cart" onClick={onClose}>
            {isNotDesctop ? 'КОШИК' : <GiShoppingCart size={45} />}
          </NavLinkStyled>
          <CartCoutner ordersQuantity={ordersQuantity}>
            {ordersQuantity}
          </CartCoutner>
        </Li>
      </Ul>
    </>
  );
};
