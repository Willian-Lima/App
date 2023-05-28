import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import { Icon } from '../icon/Icon';

// Componentes globais tem o minimo possivel de estilização

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 10px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) =>
    props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
  padding-right: ${(props) => (props.secureTextEntry ? '54px' : '10px')};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
