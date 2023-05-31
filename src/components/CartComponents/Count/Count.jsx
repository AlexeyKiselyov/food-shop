import { useDispatch } from 'react-redux';

import {
  increaseDishQuantity,
  reduceDishQuantity,
} from '../../../redux/cart/cartSlice';

import iconUp from '../../../img/icons/icon-up.svg';
import iconDown from '../../../img/icons/icon-down.svg';

import {
  CountBox,
  CountControls,
  CountInput,
  CountWrapper,
} from './Count.styled';

const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  return (
    <CountWrapper>
      <CountBox>
        <CountInput>{count}</CountInput>
      </CountBox>
      <CountControls>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseDishQuantity(id));
          }}
        >
          <img src={iconUp} alt="Increase" />
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(reduceDishQuantity(id));
          }}
        >
          <img src={iconDown} alt="Decrease" />
        </button>
      </CountControls>
    </CountWrapper>
  );
};

export default Count;
