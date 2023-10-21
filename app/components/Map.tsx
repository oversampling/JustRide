import React from 'react';
import { View } from 'react-native';
import MapView, {
  Marker,
  MarkerDragStartEndEvent,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

export default function Map({
  departureLocations,
  destinationLocations,
  setDepartureLocations,
  setDestinationLocations,
}: {
  departureLocations: { lat: number; lng: number }[];
  destinationLocations: { lat: number; lng: number }[];
  setDepartureLocations: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }[]>
  >;
  setDestinationLocations: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }[]>
  >;
}) {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ height: '100%', width: '100%' }}
        region={{
          latitude: 5.2704,
          longitude: 100.4197,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
        }}
      >
        {departureLocations.map((location, index) => (
          <Marker
            draggable
            key={index}
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            pinColor={'blue'}
            title={`Departure Location ${index + 1}`}
            onDrag={(e: MarkerDragStartEndEvent) => {
              departureLocations[index] = {
                lat: e.nativeEvent.coordinate.latitude,
                lng: e.nativeEvent.coordinate.longitude,
              };
              setDepartureLocations(departureLocations);
              console.log(departureLocations);
            }}
          />
        ))}
        {destinationLocations.map((location, index) => (
          <Marker
            draggable
            key={index}
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            pinColor={'red'}
            title={`Destination Location ${index + 1}`}
            onDrag={(e: MarkerDragStartEndEvent) => {
              destinationLocations[index] = {
                lat: e.nativeEvent.coordinate.latitude,
                lng: e.nativeEvent.coordinate.longitude,
              };
              setDestinationLocations(destinationLocations);
              console.log(destinationLocations);
            }}
          />
        ))}
      </MapView>
    </View>
  );
}
