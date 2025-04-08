import { useEffect, useRef } from 'react';
import { Container } from '../../components/CommonComponents/Container/Container';

import { Title, HomeSection } from './HomePage.styled';
import { messageHotNews } from '../../utils/messagesNotify';

export const HomePage = () => {
  const hasShownMessage = useRef(false);

  useEffect(() => {
    if (!hasShownMessage.current) {
      messageHotNews();
      hasShownMessage.current = true;
    }
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

// export default HomePage;
