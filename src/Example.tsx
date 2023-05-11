import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';

interface ExampleProps {
  text?: string;
  children?: string;
}

const Example = ({ text, children }: ExampleProps) => {
  const [state, setState] = useState('blue');
  const [value, setValue] = useState<string>();

  const handleOnPress = () => {
    setState(state == 'blue' ? 'red' : 'blue');
  };

  useEffect(() => {
    console.log('[TESTE] ' + Date());
  }, [state]);

  const handleChangeValue = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: state }}>{children}</Text>
      <Text style={{ color: 'yellow' }}>{text}</Text>
      <Button onPress={handleOnPress} title="BOTAO" />
      <TextInput
        style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#111' }}
        onChange={handleChangeValue}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderStyle: 'solid',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text>Botão estilizado</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

export default Example;
