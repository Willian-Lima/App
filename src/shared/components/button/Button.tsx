import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonContainer, ButtonDisabled, ButtonSecondary, GradientButton } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, loading, disabled, onPress, ...props }: ButtonProps) => {
  const handleOnpress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_REGULAR} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.primary:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnpress}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
      break;

    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin}>
          {renderText(theme.colors.mainTheme.primary)}
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
