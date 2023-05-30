import styled from 'styled-components';

export const CartHeaderWrapper = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr) 1fr;
  column-gap: 30px;

  padding: 22px 0;
  background: rgb(245, 146, 86, 0.2);

  font-weight: 700;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  border-radius: 40px 40px 0px 0px;

  @media (max-width: 767px) {
    height: 1px;
    padding: 0;
    & > * {
      display: none;
    }
  }
`;

export const CartHeaderTitle = styled.div`
  grid-column-start: 2;
`;
