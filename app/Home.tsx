import { HomeScreenNavigationProp } from './page_stack/RootStackParamList';
import ActionCard from './components/ActionCard';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

export function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View
      style={{ display: 'flex', flexDirection: 'column', marginHorizontal: 10 }}
    >
      <ActionCard
        title="Request Car Pool"
        action={() => navigation.navigate('RequestCarPool')}
        subtitle="request"
      />
      <ActionCard
        title="Offer Car Pool"
        action={() => navigation.navigate('OfferCarPool')}
        subtitle="offer"
      />
      <ActionCard
        title="Available Car Pool"
        action={() => navigation.navigate('Home')}
        subtitle="view"
      />
      <ActionCard
        title="My Contract"
        action={() => navigation.navigate('Home')}
        subtitle="view"
      />
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
        My Next Car Pool
      </Text>
      <ScrollView
        style={{
          maxHeight: 150,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <ActionCard
          title="My Profile"
          action={() => navigation.navigate('Home')}
          subtitle="test"
        />
        <ActionCard
          title="My Profile"
          action={() => navigation.navigate('Home')}
          subtitle="test"
        />
        <ActionCard
          title="My Profile"
          action={() => navigation.navigate('Home')}
          subtitle="test"
        />
      </ScrollView>
    </View>
  );
}
