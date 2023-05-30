import { toast } from 'react-toastify';

export const messageAddOrder = name =>
  toast.success(
    `${name}, дякуємо за замовлення! Чекайте на дзвінок для уточнення деталей! `,
    {
      position: 'bottom-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    }
  );

export const messageError = payload =>
  toast.error(`${payload}`, {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });

export const messageHotNews = () =>
  toast.success(
    `Цього року плануємо відкриття філії у Севастополі. Слідкуйте за новинами 😉`,
    {
      position: 'bottom-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    }
  );
