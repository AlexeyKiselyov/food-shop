import { useEffect } from 'react';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { NavStyled, Div1, Div2, CloseIcon } from './BurgerMenu.styled';

const body = document.querySelector('body');

export const BurgerMenu = ({ onClose, isDesctop }) => {
  if (isDesctop) {
    onClose();
  }

  useEffect(() => {
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  });

  return (
    <NavStyled>
      <Div1>
        <Logo />
        <button type="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </Div1>
      <Div2>{!isDesctop && <Nav onClose={onClose} />}</Div2>
    </NavStyled>
  );
};
