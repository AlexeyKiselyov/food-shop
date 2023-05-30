import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  text-align: center;
  color: #000000;

  @media (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 48px;
    line-height: calc(68 / 48);
  }
`;
