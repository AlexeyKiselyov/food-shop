import styled from 'styled-components';

export const DeleteBtn = styled.button`
  transition: scale ${p => p.theme.transition.first};

  &:hover img,
  &:focus img {
    scale: 1.2;
  }

  &:active img {
    scale: 1.1;
  }
`;
