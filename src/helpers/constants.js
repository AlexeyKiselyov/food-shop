// ==========  NOTIFICATION  ============

const NOT_FOUND =
  'На жаль, немає даних, які відповідають вашому пошуковому запиту. Спробуйте ще раз з іншими параметрами пошуку.';

const EMPTY_CART = 'Ваш кошик порожній, але це ніколи не пізно виправити :)';

// ==========  CATEGORIES DISHES  ============

const CATEGORIES_DISHES = {
  pizza: 'Піца',
  rolls: 'Роли',
  dessert: 'Десерти',
};

// ==========  PHONE_NUMBER_MASK  ============

const PHONE_NUMBER_MASK = [
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

// ==========  PHONE_REG_EXP  ============

const PHONE_REG_EXP = /^\(0\d{2}\)\s\d{3}-\d{2}-\d{2}$/;

// ==========  ============  ============
export {
  NOT_FOUND,
  EMPTY_CART,
  CATEGORIES_DISHES,
  PHONE_NUMBER_MASK,
  PHONE_REG_EXP,
};
