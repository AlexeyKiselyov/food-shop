import styled from 'styled-components';

export const FooterCart = styled.div`
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr) 1fr;
  column-gap: 30px;

  padding: 19px 0;
  background: rgb(245, 146, 86, 0.6);

  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;

  border-radius: 0px 0px 40px 40px;

  @media (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 419px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;

export const FooterCartCount = styled.div`
  grid-column-start: 3;

  @media (max-width: 767px) {
    grid-column-start: 1;
  }
`;
