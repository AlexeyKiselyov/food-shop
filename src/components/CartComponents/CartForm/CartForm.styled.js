import styled from 'styled-components';
import { Field, Form } from 'formik';

export const CartFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  padding: 20px;
  width: 624px;

  border-radius: 8px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);

  & h2 {
    margin-bottom: 25px;
    margin-left: 15px;

    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #1f3349;
  }

  @media (max-width: 1269px) {
    width: 100%;
  }
`;
export const BtnExit = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  top: 20px;
  right: 20px;
  color: #1f3349;
  &:hover {
    color: #2b97c2;
    transform: scale(1.02);
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  background: #f4f4f3;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.16px;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #4cc6f5;
  }

  &::placeholder {
    color: #a8a8a8;
  }
`;

export const Error = styled.span`
  margin-top: 6px;
  font-size: 12px;
  color: #fa7575;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #fff;
  transition: color 300ms linear, background-color 300ms linear;

  :hover,
  :focus {
    background-color: #fff;
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 768px) {
    padding: 10px 28px;
  }
`;
