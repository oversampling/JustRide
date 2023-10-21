import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/Home';
import { RequestCarPool } from './app/RequestCarPool';
import OfferCarPool from './app/OfferCarPool';
import { enGB, registerTranslation } from 'react-native-paper-dates';

const Stack = createNativeStackNavigator();
registerTranslation('en-GB', enGB);
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RequestCarPool" component={RequestCarPool} />
          <Stack.Screen name="OfferCarPool" component={OfferCarPool} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('App', () => App);
