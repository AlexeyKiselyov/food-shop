import { toast } from 'react-toastify';

export const messageAddOrder = name =>
  toast.success(
    `${name}, дякуємо за замовлення! Чекайте на дзвінок для уточнення деталей! `,
    {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    }
  );

export const messageError = payload =>
  toast.error(`${payload}`, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });

export const messageHotNews = () =>
  toast.info(
    `Цього року плануємо відкриття філії у Севастополі. Слідкуйте за новинами 😉`,
    {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    }
  );
