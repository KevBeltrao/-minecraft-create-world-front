import styled from 'styled-components';
import background from '../../assets/images/background.png';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    'a'
    'b'
    'c';

  width: 100%;
  height: 100vh;

  background-image: url(${background});
  background-repeat: repeat;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: b;

  height: 100%;
  width: 100%;

  background: #000;
  opacity: 50%;

  overflow-y: auto;
`;
