import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SectionTitle } from '../../components/CommonComponents/SectionTitle/SectionTitle';
import { Section } from '../../components/CommonComponents/Section/Section';
import { Container } from '../../components/CommonComponents/Container/Container';

import { ShopCategoriesNav } from '../../components/ShopComponents/ShopCategoriesNav/ShopCategoriesNav';
import { ShopCategoriesList } from '../../components/ShopComponents/ShopCategoriesList/ShopCategoriesList';
import { ShopSearch } from '../../components/ShopComponents/ShopSearch/ShopSearch';
import { Notification } from '../../components/Notification/Notification';
import { Loader } from '../../components/Loader/Loader';

import { NOT_FOUND } from '../../helpers/constants';

import { DropdownStyle, MenuWrap, LoadMoreBtn } from './ShopPage.styled';
import { getDishes } from '../../serveсes';

// ========================ShopPage===========================

export default function ShopPage() {
  const { route } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [notices, setNotices] = useState([]);
  const [searchTitleQwery, setSearchTitleQwery] = useState('');
  const [filter, setFilter] = useState('priceUp');

  const isFirstRender = useRef(true);

  // Load more
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loadMoreBtnText, setloadMoreBtnText] = useState('Завантажити ще');

  const onLoadMoreBtn = () => {
    if (totalPages && totalPages - pageNumber < 0) return;

    setPageNumber(prev => prev + 1);
  };

  useEffect(() => {
    if (totalPages && totalPages - pageNumber < 0) {
      setloadMoreBtnText('Це все...');
    } else {
      setloadMoreBtnText('Завантажити ще');
    }
  }, [pageNumber, totalPages]);

  useEffect(() => {
    setNotices([]);
    setPageNumber(1);
    setTotalPages(null);
  }, [route, searchTitleQwery, filter]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    getDishes(
      route,
      pageNumber,
      searchTitleQwery,
      setIsLoading,
      setNotices,
      setTotalPages,
      filter
    );
  }, [route, searchTitleQwery, pageNumber, filter]);

  const onSearch = searchQuery => {
    setSearchTitleQwery(searchQuery);
  };

  // dropdown options
  const options = ['Від дешевих', 'Від дорогих', 'За алфавітом'];
  const defaultOption = options[0];

  const onSelect = e => {
    const query = e.value;
    if (query === 'Від дешевих') {
      setFilter('priceUp');
    }
    if (query === 'Від дорогих') {
      setFilter('priceDown');
    }
    if (query === 'За алфавітом') {
      setFilter('aZ');
    }
  };

  return (
    <Section>
      <Container>
        <SectionTitle text={'Обери страву.'} />
        <ShopSearch onSearch={onSearch} />
        <>
          <MenuWrap>
            <ShopCategoriesNav />
            <DropdownStyle
              options={options}
              onChange={onSelect}
              value={defaultOption}
            />
          </MenuWrap>
          {notices?.length > 0 ? (
            <>
              <ShopCategoriesList data={notices} />
              {notices.length !== 0 && (
                <LoadMoreBtn type="button" onClick={onLoadMoreBtn}>
                  {loadMoreBtnText}
                </LoadMoreBtn>
              )}
            </>
          ) : (
            !isLoading && <Notification message={NOT_FOUND} />
          )}
        </>
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
}
