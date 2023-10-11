import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/Home';
import { RequestCarPool } from './app/RequestCarPool';
import OfferCarPool from './app/OfferCarPool';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RequestCarPool" component={RequestCarPool} />
        <Stack.Screen name="OfferCarPool" component={OfferCarPool} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
