import { View, Text, TextInput } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/themes';
import { Icon } from '../../../shared/components/icon/Icon';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Icon name="home3" color="blue" size={50} />
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu Email" title="Email:" />
        <Input secureTextEntry={true} placeholder="Digite sua Senha" title="Senha:" />
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
