import styled from 'styled-components';

import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7f8e9d;
    margin-bottom: 8px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px 10px 13px 32px;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  &:focus {
    border-color: '#f59256';
  }
`;

export const Error = styled.span`
  margin-top: 6px;
  margin-left: 10px;
  font-size: 12px;
  color: #fa7575;
`;
