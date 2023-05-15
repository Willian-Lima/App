import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const GradientButton = styled(LinearGradient)`
  width: 100%
  height: 100%
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  background-color: transparent
  border-width: 1px
  border-color: ${theme.colors.mainTheme.primary}
`;
