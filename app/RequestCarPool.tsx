import { View } from 'react-native';
import RequestCarPoolForm from './components/RequestCarPoolForm';
import { HomeScreenNavigationProp } from './router/RootStackParamList';

export function RequestCarPool({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View style={{ margin: 15 }}>
      <RequestCarPoolForm navigation={navigation} />
    </View>
  );
}
