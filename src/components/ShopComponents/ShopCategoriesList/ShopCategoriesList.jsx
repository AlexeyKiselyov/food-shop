import { ShopCategoryItem } from '../ShopCategoryItem/ShopCategoryItem';
import { ScrollUpBtn } from '../../CommonButtons/ScrollUpBtn/ScrollUpBtn';

import { List } from './ShopCategoriesList.styled';

export const ShopCategoriesList = ({ data }) => {
  return (
    <>
      <List>
        {data.map((item, idx) => {
          return <ShopCategoryItem key={item._id + idx} data={item} />;
        })}
      </List>

      <ScrollUpBtn />
    </>
  );
};
