import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { postOrder } from '../../../serveсes';
import { PHONE_REG_EXP } from '../../../helpers/constants';

import { InputNumber } from './InputNumber/InputNumber';
import { InputName } from './InputName/InputName';
import { InputStreet } from './InputStreet/InputStreet';
import { InputHouse } from './InputHouse/InputHouse';
import { InputApartment } from './InputApartment/InputApartment';
import { Loader } from '../../Loader/Loader';

import { Button, FormBox, Box, CartFormWrapper } from './CartForm.styled';
import './style.css';

export const CartForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const centerMap = useMemo(
    () => ({ lat: 48.468588815325525, lng: 35.043187936529804 }),
    []
  );

  const initialValues = {
    name: '',
    number: '',
    street: '',
    house: '',
    apartment: '',
  };

  const schema = Yup.object({
    name: Yup.string().min(4).max(32).required("Ім'я є обов'язковим"),
    number: Yup.string()
      .matches(PHONE_REG_EXP, 'Будь ласка, введіть валідний телефон')
      .required("Телефон є обов'язковим"),
    street: Yup.string().required("Вулиця є обов'язковою"),
    house: Yup.string().required("Номер дому є обов'язковим"),
    apartment: Yup.string(),
  });

  const handleSubmit = (
    { name, number, street, house, apartment },
    { resetForm }
  ) => {
    const newContact = {
      name,
      number,
      street,
      house: Number(house),
      apartment: Number(apartment),
    };

    postOrder(newContact, setIsLoading, resetForm, dispatch);
  };

  return (
    <CartFormWrapper>
      <Box>
        <h2>Ваші контактні дані</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ setFieldTouched, setFieldError, setFieldValue, values }) => (
            <FormBox action="">
              <InputName />
              <InputNumber />
              <InputStreet
                setFieldTouched={setFieldTouched}
                setFieldError={setFieldError}
                setFieldValue={setFieldValue}
                values={values}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <InputHouse />
                <InputApartment />
              </div>
              <Button type="submit">Оформити замовлення</Button>
            </FormBox>
          )}
        </Formik>
      </Box>
      <Box>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2> Наша адреса: м.Дніпро, вул.Короленка, 21</h2>
            <GoogleMap
              zoom={10}
              center={centerMap}
              mapContainerClassName="map-container"
            >
              <Marker position={centerMap} />
            </GoogleMap>
          </>
        )}
      </Box>
      {isLoading && <Loader />}
    </CartFormWrapper>
  );
};
