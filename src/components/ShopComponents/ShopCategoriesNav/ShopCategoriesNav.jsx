import { useMedia } from 'react-use';

import { GiSushis, GiFullPizza, GiCakeSlice } from 'react-icons/gi';

import { Nav, List, Item, LinkNav } from './ShopCategoriesNav.styled';

export const ShopCategoriesNav = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      <Nav>
        <List>
          <Item>
            <LinkNav to="/dishes/all">Усі страви</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/dishes/rolls">
              Роли <GiSushis size={isMobile ? '20' : '25'} />
            </LinkNav>
          </Item>
          <Item>
            <LinkNav to="/dishes/pizza">
              Піца <GiFullPizza size={isMobile ? '20' : '25'} />
            </LinkNav>
          </Item>
          <Item>
            <LinkNav to="/dishes/dessert">
              Десерти <GiCakeSlice size={isMobile ? '20' : '25'} />
            </LinkNav>
          </Item>
        </List>
      </Nav>
    </>
  );
};
