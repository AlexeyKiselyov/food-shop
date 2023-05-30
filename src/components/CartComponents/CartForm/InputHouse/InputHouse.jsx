import { Error, Input, Label } from './InputHouse.styled';

import { ErrorMessage } from 'formik';

export const InputHouse = () => {
  return (
    <Label htmlFor="house">
      <Input
        name="house"
        type="number"
        max="1000"
        title="Вкажіть номер дому ввевши цифри"
        placeholder="Номер дому"
      />
      <ErrorMessage name="house" render={message => <Error>{message}</Error>} />
    </Label>
  );
};
