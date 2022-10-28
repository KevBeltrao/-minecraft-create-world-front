import { FC, ReactNode } from 'react';
import { ButtonWrapper, Label } from './styles';

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ disabled = false, onClick, children }) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>
      <Label>{children}</Label>
    </ButtonWrapper>
  );
};

export default Button;
