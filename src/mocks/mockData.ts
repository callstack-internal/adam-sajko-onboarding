import {WeatherDetails, WeatherList} from '../types';

export const weatherDetailsMock: WeatherDetails = {
  coord: {
    lon: 21.0118,
    lat: 52.2298,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 286.33,
    feels_like: 285.87,
    temp_min: 285.04,
    temp_max: 287.46,
    pressure: 1017,
    humidity: 83,
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 270,
  },
  clouds: {
    all: 75,
  },
  dt: 1718857526,
  sys: {
    type: 2,
    id: 2093901,
    country: 'PL',
    sunrise: 1718849656,
    sunset: 1718910051,
  },
  timezone: 7200,
  id: 756135,
  name: 'Warsaw',
  cod: 200,
};

export const weatherListMock: WeatherList = {
  cnt: 1,
  list: [weatherDetailsMock],
};
