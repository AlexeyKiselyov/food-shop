import { useState } from 'react';
import { useMedia } from 'react-use';

import { BtnMenu } from '../CommonButtons/BtnBurgerMenu/BtnBurgerMenu';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Nav } from './Nav/Nav';
import { NavStyled } from './Navigation.styled';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesctop = useMedia('(min-width: 1280px)');
  const isMobile = useMedia('(max-width: 767px)');

  const onOpen = () => {
    setIsMenuOpen(true);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isMenuOpen && (
        <NavStyled>
          <div>
            <Logo />
            {isDesctop && <Nav />}
          </div>

          <div>{!isDesctop && <BtnMenu onClick={onOpen} />}</div>
        </NavStyled>
      )}

      {isMenuOpen && (
        <BurgerMenu
          onClose={onClose}
          isDesctop={isDesctop}
          isMobile={isMobile}
        />
      )}
    </>
  );
};
