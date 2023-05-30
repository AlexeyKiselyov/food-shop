import { Error, Input, Label } from '../InputHouse/InputHouse.styled';

import { ErrorMessage } from 'formik';

export const InputApartment = () => {
  return (
    <Label htmlFor="apartment">
      <Input
        name="apartment"
        type="number"
        max="1000"
        title="Вкажіть номер квартири ввевши цифри"
        placeholder="Номер квартири"
      />
      <ErrorMessage
        name="apartment"
        render={message => <Error>{message}</Error>}
      />
    </Label>
  );
};
