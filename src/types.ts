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
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherList {
  cnt: number;
  list: WeatherDetails[];
}
