import { TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonContainer, ButtonSecondary, GradientButton } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.primary:
      return (
        <ButtonContainer margin={margin} {...props}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
      break;

    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
      break;

    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.neutralTheme.white}>
            {title}
          </Text>
        </ButtonContainer>
      );
      break;
  }
};

export default Button;
