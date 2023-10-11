import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';
import { RootStackParamList } from './page_stack/RootStackParamList';
import globalStyles from './styles/global';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View style={{ margin: 15 }}>
      <View style={[globalStyles.cardRow]}>
        <View style={[globalStyles.cardSizeSmall]}>
          <Text style={{ fontSize: 20 }}>Request Car Pool</Text>
          <Text onPress={() => navigation.navigate('RequestCarPool')}>
            title="Request Car Pool"
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Offer Car Pool</Text>
          <Button
            title="Offer Car Pool"
            onPress={() => navigation.navigate('OfferCarPool')}
          />
        </View>
      </View>
    </View>
  );
}
