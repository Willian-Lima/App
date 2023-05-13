import { View, Text, TextInput } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Texto</Text>
        <Input />
        <Button margin="8px" title="Entrar" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
