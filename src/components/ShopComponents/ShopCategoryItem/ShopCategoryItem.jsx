import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BuyBtn } from '../../CommonButtons/BuyBtn/BuyBtn';
import { Loader } from '../../Loader/Loader';

import { selectOrder } from '../../../redux/cart/cartSelectors';
import { addDishToCart } from '../../../redux/cart/cartSlice';

import { CATEGORIES_DISHES } from '../../../helpers/constants';

import {
  Item,
  Wrap,
  ImgWrap,
  CategoryLabel,
  Img,
  WrapInner,
  Title,
  Ul,
  Li,
  Lable,
  Text,
  ThumbBtn,
  Price,
} from './ShopCategoryItem.styled';

// =========================================================
export const ShopCategoryItem = ({ data }) => {
  const { _id, category, title, descr, weight, price, image } = data;

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const order = useSelector(selectOrder);

  const isOrder = !!order.find(order => order._id === _id);

  const onChangeOrder = () => {
    const orderObj = {
      ...data,
      count: 1,
      priceTotal: price,
    };
    dispatch(addDishToCart(orderObj));
  };

  return (
    <>
      <Item>
        <ImgWrap>
          <CategoryLabel>{CATEGORIES_DISHES[category]}</CategoryLabel>
          <Img src={image} alt={title} loading="lazy" />
          <Price>
            {' '}
            <span>{price} грн</span>
          </Price>
        </ImgWrap>
        <Wrap>
          <WrapInner>
            <Title>{title}</Title>
            <Ul>
              <Li key={`${_id}+descr`}>
                <Lable>Склад:</Lable>
                <Text>{descr}</Text>
              </Li>
              <Li key={`${_id}+weight`}>
                <Lable>Вага:</Lable>
                <Text>{weight} г.</Text>
              </Li>
            </Ul>
          </WrapInner>
          <ThumbBtn>
            <BuyBtn onClick={onChangeOrder} active={isOrder ? 'clicked' : ''} />
          </ThumbBtn>
        </Wrap>
      </Item>

      {isLoading && <Loader />}
    </>
  );
};
