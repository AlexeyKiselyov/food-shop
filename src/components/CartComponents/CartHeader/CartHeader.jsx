import { CartHeaderTitle, CartHeaderWrapper } from './CartHeader.styled';

export const CartHeader = () => {
  return (
    <CartHeaderWrapper>
      <CartHeaderTitle>найменування</CartHeaderTitle>
      <div>кількість</div>
      <div>вартість</div>
    </CartHeaderWrapper>
  );
};
