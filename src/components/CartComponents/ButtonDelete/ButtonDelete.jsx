import { useDispatch } from 'react-redux';

import iconDelete from '../../../img/icons/cross.svg';
import { deleteDish } from '../../../redux/cart/cartSlice';

import { DeleteBtn } from './ButtonDelete.styled';

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <DeleteBtn
      type="button"
      onClick={() => {
        dispatch(deleteDish(id));
      }}
    >
      <img src={iconDelete} alt="Delete" />
    </DeleteBtn>
  );
};

export default ButtonDelete;
