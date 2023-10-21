import React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { HomeScreenNavigationProp } from '../router/RootStackParamList';

export default function NotificationDialog({
  navigation,
  title,
  content,
  visible,
  setVisible,
}: {
  navigation: HomeScreenNavigationProp;
  title: string;
  content: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hideDialog = () => setVisible(false);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{content}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              hideDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            onPress={() => {
              hideDialog();
              navigation.navigate('Home');
            }}
          >
            Confirm
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
