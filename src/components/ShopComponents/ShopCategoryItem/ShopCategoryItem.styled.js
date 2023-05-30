import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #111111;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  overflow-wrap: break-word;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ImgWrap = styled.div`
  position: relative;
`;

export const CategoryLabel = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;

  padding: 6px 0;
  width: 158px;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;
  border-radius: 0px 40px 40px 0px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Img = styled.img`
  min-width: 250px;
  height: 293px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 224px;
  }
  @media screen and (min-width: 1280px) {
    height: 405px;
  }
`;

export const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: calc(38 / 28);
  /* height: 76px; */
  overflow: hidden;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  font-size: 16px;
  line-height: calc(22 / 16);
`;

export const Li = styled.li`
  display: flex;
`;

export const Lable = styled.p`
  width: 90px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  @media screen and (min-width: 768px) {
  }
`;
export const ThumbBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 12px;
  padding-bottom: 12px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 12px;
  right: 0px;
  height: 44px;
  width: 110px;

  font-size: 20px;
  line-height: calc(16 / 12);

  border-radius: 40px 0px 0px 40px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  transition: transform ${p => p.theme.transition.first};

  :hover {
    transform: scale(1.2);
  }

  /* span {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 90px;
  }
`;
