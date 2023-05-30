import { Error, Input, Label } from './InputName.styled';

import { ErrorMessage } from 'formik';

export const InputName = () => {
  return (
    <Label htmlFor="name">
      <Input
        name="name"
        type="text"
        title="Iм'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
        pattern="^[a-zA-Zа-Ая-яА-Я-а]+(([' -][a-zA-Zа-Ая-яА-Я-а ])?[a-zA-Zа-Ая-яА-Я-а]*)*$"
        placeholder="Напишіть своє ім'я"
      />
      <ErrorMessage name="name" render={message => <Error>{message}</Error>} />
    </Label>
  );
};
