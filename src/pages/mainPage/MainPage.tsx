import { FC } from 'react';
import Heading from '../../components/Heading';
import { Container, ListContainer } from './styles';

const MainPage: FC = () => {
  return (
    <Container>
      <Heading />
      <ListContainer></ListContainer>
    </Container>
  );
};

export default MainPage;
