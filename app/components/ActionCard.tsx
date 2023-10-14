import { Avatar, Button, Card } from 'react-native-paper';
import { View } from 'react-native';

export default function ActionCard({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action: () => void;
}) {
  return (
    <Card
      style={{
        marginVertical: 10,
        minHeight: 70,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Card.Title
          style={{ width: '100%' }}
          title={title}
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <Card.Actions style={{ marginLeft: 'auto', width: 'auto' }}>
          <Button onPress={action}>{subtitle}</Button>
        </Card.Actions>
      </View>
    </Card>
  );
}
