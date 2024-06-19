import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type WeatherStackParamsList = {
  WeatherList: undefined;
  WeatherDetails: {cityId: number | string};
};

export type RootStackParamList = {
  Weather: NavigatorScreenParams<WeatherStackParamsList>;
};

export type RootScreenProps<Route extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Route>;

export type WeatherScreenProps<Route extends keyof WeatherStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<WeatherStackParamsList, Route>,
    NativeStackScreenProps<RootStackParamList>
  >;

export interface WeatherDetails {
  id: number;
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  weather: {
    main: 'Clear' | 'Clouds' | 'Rain' | 'Snow';
    icon: string;
  }[];
}
