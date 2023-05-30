import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';

import formatPrice from '../../../utils/priceFormatter';

import {
  ProductControls,
  ProductCoutn,
  ProductPrice,
  ProductWrapper,
} from './Product.styled';

export const Product = ({ product }) => {
  const { image, title, priceTotal, count, _id } = product;

  return (
    <ProductWrapper>
      <div className="product__img">
        <img src={image} alt={title} />
      </div>
      <p className="product__title">{title}</p>
      <ProductCoutn>
        <Count count={count} id={_id} />
      </ProductCoutn>
      <ProductPrice>{formatPrice(priceTotal)} грн.</ProductPrice>
      <ProductControls>
        <ButtonDelete id={_id} />
      </ProductControls>
    </ProductWrapper>
  );
};
