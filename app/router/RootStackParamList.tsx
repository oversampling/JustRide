import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  RequestCarPool: undefined;
  OfferCarPool: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type RequestCarPoolScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RequestCarPool'
>;
