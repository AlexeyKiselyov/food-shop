import { useDispatch } from 'react-redux';

import iconDelete from '../../../img/icons/cross.svg';
import { deleteDish } from '../../../redux/cart/cartSlice';

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(deleteDish(id));
      }}
    >
      <img src={iconDelete} alt="Delete" />
    </button>
  );
};

export default ButtonDelete;
