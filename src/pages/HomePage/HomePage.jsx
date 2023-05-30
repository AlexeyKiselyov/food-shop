import { useEffect } from 'react';
import { Container } from '../../components/CommonComponents/Container/Container';

import { Title, HomeSection } from './HomePage.styled';
import { messageHotNews } from '../../utils/messagesNotify';

const HomePage = () => {
  useEffect(() => {
    messageHotNews('alex');
  }, []);
  return (
    <>
      <HomeSection>
        <Container>
          <Title>Вітаємо у нашому магазині їжі!</Title>
        </Container>
      </HomeSection>
    </>
  );
};

export default HomePage;
