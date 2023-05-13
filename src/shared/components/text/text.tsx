import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './text.style';
import { textTypes } from './textTypes';
import { useMemo } from 'react';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
        break;
      default:
        return '16px';
        break;
    }
  }, [type]);
  return <ContainerText fontSize={handleSize} color={color} {...props}></ContainerText>;
};

export default Text;
