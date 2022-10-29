import styled from 'styled-components';
import Title from '../../assets/images/title.svg';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const TitleImage = styled.img.attrs({
  src: Title,
  alt: 'title',
})``;
