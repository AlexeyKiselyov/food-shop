import styled from 'styled-components';

export const Button = styled.button`
  width: 248px;
  padding: 8px 0;

  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: ${p => (p.active === 'clicked' ? '#ffffff' : '#f59256')};

  background-color: ${p => (p.active === 'clicked' ? '#f59256' : '#ffffff')};
  border: 2px solid #f59256;
  border-radius: 40px;

  transition: color ${p => p.theme.transition.first},
    scale ${p => p.theme.transition.first},
    box-shadow ${p => p.theme.transition.first};

  :hover,
  :focus {
    scale: 1.04;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;
