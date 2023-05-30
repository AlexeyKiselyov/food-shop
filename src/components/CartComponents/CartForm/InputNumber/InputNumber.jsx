import { Field, ErrorMessage } from 'formik';

import { PHONE_NUMBER_MASK } from '../../../../helpers/constants';

import { Error, Input, Label } from './InputNumber.styled';

export const InputNumber = () => {
  return (
    <>
      <Label htmlFor="number">
        <Field name="number">
          {({ field }) => (
            <>
              <Input
                type="text"
                {...field}
                mask={PHONE_NUMBER_MASK}
                title="Номер повинен бути у форматі (099) 9999-99-99"
                id="phone"
                placeholder="Напишіть свій телефон"
              />
              <ErrorMessage
                name="number"
                render={message => <Error>{message}</Error>}
              />
            </>
          )}
        </Field>
      </Label>
    </>
  );
};
