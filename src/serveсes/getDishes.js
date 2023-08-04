import axios from 'axios';

import { messageError } from '../utils/messagesNotify';

const { REACT_APP_API_URL: BASE_URL } = process.env;

axios.defaults.baseURL = BASE_URL;

export default function getDishes(
  route,
  pageNumber,
  searchTitleQwery,
  setIsLoading,
  setNotices,
  setTotalPages,
  filter
) {
  setIsLoading(true);
  axios(
    `/dishes/${route}?page=${pageNumber}&limit=4&qwery=${searchTitleQwery}&sort=${filter}`
  )
    .then(res => {
      const { dishes, totalPages } = res.data;
      setTotalPages(totalPages);
      setNotices(prev => {
        return [...prev, ...dishes];
      });
    })
    .catch(error => {
      messageError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
