import styled from 'styled-components';

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
    padding: '6px 10px 6px 20px',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '19px',
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
