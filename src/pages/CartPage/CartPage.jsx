import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Section } from '../../components/CommonComponents/Section/Section';
import { Container } from '../../components/CommonComponents/Container/Container';
import { SectionTitle } from '../../components/CommonComponents/SectionTitle/SectionTitle';

import { selectOrder } from '../../redux/cart/cartSelectors';

import { EMPTY_CART } from '../../helpers/constants';

import { CartHeader } from '../../components/CartComponents/CartHeader/CartHeader';
import { Product } from '../../components/CartComponents/Product/Product';
import { CartFooter } from '../../components/CartComponents/CartFooter/CartFooter';
import { Notification } from '../../components/Notification/Notification';
import { CartForm } from '../../components/CartComponents/CartForm/CartForm';

const CartPage = () => {
  const cartOrders = useSelector(selectOrder);

  const [total, setTotal] = useState({
    price: cartOrders.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: cartOrders.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cartOrders.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cartOrders.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cartOrders]);

  const products = cartOrders.map((product, ind) => {
    return <Product product={product} key={product._id} />;
  });

  return (
    <Section>
      <Container>
        <SectionTitle text="Кошик" />
        {cartOrders.length ? (
          <>
            <CartHeader />
            {products}
            <CartFooter total={total} />
            <SectionTitle text="Оформлення замовлення " />
            <CartForm />
          </>
        ) : (
          <Notification message={EMPTY_CART} />
        )}
      </Container>
    </Section>
  );
};

export default CartPage;
