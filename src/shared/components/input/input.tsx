import { TextInput, TextInputProps } from 'react-native';
import { ContainerInput } from './input.styled';
import { DisplayFlexColumn } from '../globalStyles/GlobalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/themes';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ errorMessage, title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          margin="2px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
