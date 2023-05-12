import { TextInput, TextInputProps } from 'react-native';
import { ContainerInput } from './input.styled';

interface InputProps extends TextInputProps {}

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
