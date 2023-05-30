import styled from 'styled-components';

export const CountWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const CountBox = styled.div`
  width: 40px;
  height: 30px;
  background: #eaeff2;
  border-radius: 3px;
`;

export const CountInput = styled.p`
  max-width: 100%;
  padding-top: 4px;
  background-color: transparent;

  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
`;

export const CountControls = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;

  img {
    display: block;
  }

  img:hover,
  img:focus {
    fill: red;
  }
`;
