import { FC } from 'react';
import { ButtonWrapper, Label } from './styles';

interface ButtonProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>
      <Label>{label}</Label>
    </ButtonWrapper>
  );
};

export default Button;
