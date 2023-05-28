import { Alert, ModalProps as ModalPropsReact, Modal as MoralReact } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <MoralReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text type={textTypes.SUB_TITLE_REGULAR} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text>{text}</Text>
        <Button type={theme.buttons.buttonsTheme.primary} title="Close" onPress={onCloseModal} />
        <IconCloseModal onPress={onCloseModal} name="cross" />
      </ContainerModal>
    </MoralReact>
  );
};

export default Modal;
