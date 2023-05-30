import axios from 'axios';

import { messageAddOrder, messageError } from '../utils/messagesNotify';
import { clearCart } from '../redux/cart/cartSlice';

export default function postOrder(data, setIsLoading, resetForm, dispatch) {
  setIsLoading(true);
  axios
    .post(`/order`, data)
    .then(result => {
      if (result.data) {
        messageAddOrder(result.data.name);
        dispatch(clearCart());
        resetForm();
      }
    })
    .catch(error => {
      messageError(error.response.data.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
