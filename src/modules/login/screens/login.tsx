import { View, Text, TextInput } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/themes';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Texto</Text>
        <Input />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="8px"
          title="Entrar"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
