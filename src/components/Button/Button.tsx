import { FC, ReactNode } from 'react';
import { ButtonWrapper, Label } from './styles';
import clickSound from '../../assets/sounds/buttonClick.mp3';

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ disabled = false, onClick, children }) => {
  const audio = new Audio(clickSound);

  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={() => {
        onClick();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        audio.play();
      }}
    >
      <Label>{children}</Label>
    </ButtonWrapper>
  );
};

export default Button;
