import AsyncSelect from 'react-select/async';
import {
  ErrorText,
  Label,
  controlStyle,
  themeColors,
} from './InputStreet.styled';
import streets from '../../../../data/streets.json';

import { ErrorMessage } from 'formik';

export const InputStreet = ({
  setFieldTouched,
  setFieldError,
  setFieldValue,
  values: { street },
}) => {
  const NAME_INPUT_CITY = 'street';

  const handleChange = evt => {
    setFieldTouched(NAME_INPUT_CITY);

    setFieldError(NAME_INPUT_CITY, true);

    setFieldValue(NAME_INPUT_CITY, evt.label);
  };

  const listStreets = streets.map(({ name }, idx) => ({
    value: idx,
    label: `${name}`,
  }));

  const filterStreets = inputValue => {
    return listStreets
      .filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
      .slice(0, 30);
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStreets(inputValue));
    }, 500);
  };

  const valueStreet = listStreets.find(({ label }) => label === street);
  const noOptionsMessage = () => 'Sorry, your city was not found';

  return (
    <>
      <Label>
        <AsyncSelect
          name="street"
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={handleChange}
          value={valueStreet}
          noOptionsMessage={noOptionsMessage}
          placeholder="Оберіть свою вулицю"
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
          name="street"
          render={message => <ErrorText>{message}</ErrorText>}
        />
      </Label>
    </>
  );
};
