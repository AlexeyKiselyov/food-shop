import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: rgba(24, 28, 39, 1);
  transition: color 100ms linear;

  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 700;
    text-decoration-line: underline;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 1);
    &:hover {
      color: rgba(245, 146, 86, 1);
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
    margin-bottom: 0;
    margin-left: 80px;
  }
`;

export const Li = styled.li`
  &:last-child {
    position: relative;
    display: inline-block;
    margin-left: 560px;

    @media (max-width: 1279px) {
      margin-left: 0px;
    }
  }
`;

export const CartCoutner = styled.div`
  position: absolute;
  top: 0px;
  left: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  border: 2px solid;
  border: ${p => {
    if (p.ordersQuantity > 0) {
      return '2px solid #f59256';
    } else {
      return '2px solid #000';
    }
  }};
  border-radius: 50%;

  font-size: 18px;
  font-weight: 650;
  line-height: 1.35;

  @media (min-width: 768px) and (max-width: 1279px) {
    left: 180px;
  }

  @media (min-width: 1280px) {
    left: 40px;
  }
`;
