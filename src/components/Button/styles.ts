import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 64px 0 64px;
  border: none;

  background: #757574;
  box-shadow: 0px 5px 0px #575756, 0px -5px 0px #aaabab;

  cursor: pointer;

  &:disabled {
    background: #2c2d2d;
    border: 3px solid #000000;
    box-shadow: none;

    cursor: default;
  }

  &:active {
    background: #2c2d2d;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;

  font-family: 'Minecraftia';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  &:disabled {
    font-family: 'Minecraftia';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9f9f9e;
  }
`;
