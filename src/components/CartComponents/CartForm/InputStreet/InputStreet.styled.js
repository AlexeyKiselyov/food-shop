import styled from 'styled-components';

import { Field } from 'formik';

export const Input = styled(Field)`
  width: 100%;
  padding: 14px 10px 13px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }

  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

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

export const Label = styled.label`
  position: relative;
  margin-bottom: 20px;
`;

export const ErrorText = styled.span`
  margin-top: 6px;
  margin-left: 10px;
  font-size: 12px;
  color: #fa7575;
`;

export const controlStyle = (baseStyles, state) => {
  return {
    ...baseStyles,
    borderRadius: '40px',
    backgroundColor: '#fdf7f2',
    padding: '8px 10px 8px 24px',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '0.04em',
    fontFamily: 'Manrope',
    borderWidth: state.isFocused ? '1px' : '1px',
    outline: 'none',
    borderColor: state.isFocused ? '#f59256' : 'rgba(245, 146, 86, 0.5)',
  };
};

export const themeColors = theme => {
  return {
    ...theme,

    colors: {
      ...theme.colors,
      primary25: 'rgba(245, 146, 86, 0.5)', // background hover options
      primary: '#f59256',
      neutral0: '#fdf7f2', // background list options
      neutral80: '#111111',
      neutral50: 'rgba(17, 17, 17, 0.6)', // text placeholder

      neutral20: 'rgba(245, 146, 86, 0.5)', // arrow
      neutral40: '#f59256',

      neutral30: '#f59256', // hover
      neutral60: '#c28813', // active arrow
      neutral70: '#fffb1b',
      neutral5: '#283eff',
      neutral10: '#ff28a5',
    },
  };
};
