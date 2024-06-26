import {NativeModules} from 'react-native';

const {LocationModule} = NativeModules;

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export default LocationModule as {
  getCurrentLocation(): Promise<Coordinates>;
};
