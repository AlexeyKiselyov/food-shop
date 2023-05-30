import styled from 'styled-components';

export const ProductWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr) 1fr;
  column-gap: 30px;

  padding: 20px 0;
  border-bottom: 1px solid rgba(126, 155, 189, 0.3);

  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;

  @media (max-width: 767px) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(60px, auto);
    column-gap: 15px;
    row-gap: 10px;
  }

  & > * {
    align-self: center;
  }

  img {
    justify-self: center;
    @media (max-width: 767px) {
      grid-column: 1/3;
    }
  }

  p {
    @media (max-width: 767px) {
      grid-column: 3/-1;
    }
  }
`;

export const ProductCoutn = styled.div`
  @media (max-width: 767px) {
    grid-column: 1/3;
    justify-self: center;
  }
`;

export const ProductPrice = styled.div`
  @media (max-width: 767px) {
    grid-column: 3/6;
  }
`;

export const ProductControls = styled.div`
  justify-self: center;
`;
