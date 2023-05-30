import styled from 'styled-components';

import Wallpaper from '../../img/HomePage/wallpapers.webp';

export const Title = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: 1.38;
  font-weight: 700;
  color: black;
  @media screen and (min-width: 768px) {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const HomeSection = styled.section`
  padding-top: 60px;
  width: 100%;
  height: calc(100vh - 92px);
  background-repeat: no-repeat;

  background-image: linear-gradient(
      180deg,
      rgba(253, 247, 242, 1) 0%,
      rgba(186, 156, 58, 0.1) 50%
    ),
    url(${Wallpaper});

  background-size: cover;
  background-position: 50% 50%;
`;
