import Select from 'react-select';

import { ErrorMessage } from 'formik';

import {
  ErrorText,
  Label,
  controlStyle,
  themeColors,
} from './InputOrderCategory.styled';

import './style.css';

export const InputOrderCategory = ({
  setFieldTouched,
  setFieldError,
  setFieldValue,
  setOrderCategory,
}) => {
  const options = [
    { value: 'Потрібна доставка', label: 'Потрібна доставка' },
    { value: 'Самовивіз', label: 'Самовивіз' },
  ];

  const ORDER_CATEGORY_INPUT = 'orderCategory';

  const handleChange = evt => {
    setFieldTouched(ORDER_CATEGORY_INPUT);

    setFieldError(ORDER_CATEGORY_INPUT, true);

    setFieldValue(ORDER_CATEGORY_INPUT, evt.label);

    setOrderCategory(evt.label);
  };

  const noOptionsMessage = () => 'Вибачте, нічого не знайдено';

  return (
    <>
      <Label>
        <Select
          name="orderCategory"
          options={options}
          isSearchable={false}
          onChange={handleChange}
          placeholder="Оберіть варіант доставки"
          noOptionsMessage={noOptionsMessage}
          styles={{
            control: (baseStyles, state) => {
              return controlStyle(baseStyles, state);
            },
          }}
          theme={theme => {
            return themeColors(theme);
          }}
        />
        <ErrorMessage
          name="orderCategory"
          render={message => <ErrorText>{message}</ErrorText>}
        />
      </Label>
    </>
  );
};
