import styled from 'styled-components/native';
import { theme } from '../../themes/themes';

// Componentes globais tem o minimo possivel de estilização

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 10px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${theme.colors.grayTheme.gray80};
`;
