import React from 'react';
import { Avatar, Button, Card, TextInput } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import * as Location from 'expo-location';

import { HomeScreenNavigationProp } from '../router/RootStackParamList';
import NotificationDialog from './NotificationDialog';
import Map from './Map';
import { TimePicker } from './TimePicker';
import DatePicker from './DatePicker';

export default function RequestCarPoolForm({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  // Departures location
  const [departureLocations, setDepartureLocations] = React.useState<
    {
      lat: number;
      lng: number;
    }[]
  >([{ lat: 5.2632, lng: 100.4846 }]);

  // Destination location
  const [destinationLocations, setDestinationLocations] = React.useState<
    {
      lat: number;
      lng: number;
    }[]
  >([{ lat: 5.3632, lng: 100.4846 }]);

  // Request Dialog
  const [showReqDialog, setShowReqDialog] = React.useState<boolean>(false);
  const submitRequest = () => {
    setShowReqDialog(true);
  };

  // Date Picker
  const [dates, setDates] = React.useState<Date[]>(new Array<Date>());

  // max reach time Picker
  const [reachTime, setReachTime] = React.useState({
    hours: 0,
    minutes: 0,
  });

  // departure Picker
  const [departureTime, setDepartureTime] = React.useState({
    hours: 0,
    minutes: 0,
  });

  // Maps
  // const onChooseDepartureLocations = async (
  //   lat: number,
  //   lng: number,
  //   index: number,
  // ) => {
  // let { status } = await Location.requestForegroundPermissionsAsync();
  // if (status !== 'granted') {
  //   alert('Not granted');
  //   return;
  // }

  // let location = await Location.getCurrentPositionAsync({});
  // departureLocations[index] = { lat, lng };
  // setDepartureLocations(departureLocations);
  // console.log(departureLocations[index].lat, departureLocations[index].lng);
  // };

  return (
    <Card>
      <Card.Title
        style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        title="Request Car Pool"
        left={(_) => <Avatar.Icon size={36} icon="folder" />}
      />
      <Card.Content style={{ padding: 0 }}>
        <ScrollView style={{ height: 450 }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {departureLocations.map((latlng, index) => {
              return (
                <TextInput
                  key={index}
                  label="Departure Location"
                  style={{ flex: 1 }}
                  value={`lat: ${latlng.lat}, lng: ${latlng.lng}`}
                />
              );
            })}
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {destinationLocations.map((latlng, index) => {
              return (
                <TextInput
                  key={index}
                  label="Destination Location"
                  style={{ flex: 1 }}
                  value={`lat: ${latlng.lat}, lng: ${latlng.lng}`}
                />
              );
            })}
          </View>
          <View>
            <TimePicker
              label="Departure Time"
              time={departureTime}
              setTime={setDepartureTime}
            />
          </View>
          <View>
            <TimePicker
              label="Max Reach Time"
              time={reachTime}
              setTime={setReachTime}
            />
          </View>
          <View>
            <DatePicker label="Select Date" dates={dates} setDates={setDates} />
          </View>
          <View style={{ height: 350, width: '100%' }}>
            <Map
              departureLocations={departureLocations}
              destinationLocations={destinationLocations}
              setDepartureLocations={setDepartureLocations}
              setDestinationLocations={setDepartureLocations}
            />
          </View>
        </ScrollView>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => submitRequest()}>Submit Request</Button>
      </Card.Actions>
      <NotificationDialog
        navigation={navigation}
        title="Request Sent"
        content="Your request has been sent to the driver."
        visible={showReqDialog}
        setVisible={setShowReqDialog}
      />
    </Card>
  );
}
