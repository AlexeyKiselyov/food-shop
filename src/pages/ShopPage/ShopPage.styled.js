import styled from 'styled-components';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 28px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const DropdownStyle = styled(Dropdown)`
  width: 200px;

  .Dropdown-control {
    border-radius: 20px;
  }

  &.is-open .Dropdown-control {
    border-radius: 20px 20px 0px 0px;
  }

  .Dropdown-menu {
    border-radius: 0px 0px 20px 20px;
  }
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #fff;
  transition: color 300ms linear, background-color 300ms linear;

  :hover,
  :focus {
    background-color: #fff;
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 768px) {
    padding: 10px 28px;
  }
`;
