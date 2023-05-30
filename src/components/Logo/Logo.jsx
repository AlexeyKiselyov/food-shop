import { NavLink } from 'react-router-dom';
import { LogoText, Span } from './Logo.styled';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoText>
        Goo<Span>d F</Span>ood
      </LogoText>
    </NavLink>
  );
};
