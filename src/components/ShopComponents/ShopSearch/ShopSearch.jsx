import { useState } from 'react';

import { InputSearch, LabelSearch, RemoveBtn } from './ShopSearch.styled';

import { ReactComponent as SearchIcon } from '../../../img/icons/search-icon.svg';
import { ReactComponent as RemoveIcon } from '../../../img/icons/remove-search-query-icon.svg';

export const ShopSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const searchHandler = e => {
    setSearchQuery(e.target.value);
  };

  const removeQuery = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <LabelSearch>
        <InputSearch
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={searchHandler}
        />
        {!searchQuery && <SearchIcon />}
        {searchQuery && (
          <RemoveBtn type="button" onClick={removeQuery}>
            <RemoveIcon />
          </RemoveBtn>
        )}
      </LabelSearch>
    </form>
  );
};
