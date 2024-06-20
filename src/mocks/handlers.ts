import {http, HttpResponse} from 'msw';
import {WEATHER_API_URL} from '../constants';
import {weatherDetailsMock, weatherListMock} from './mockData';

export const handlers = [
  http.get(`${WEATHER_API_URL}/weather`, () => {
    return new HttpResponse(JSON.stringify(weatherDetailsMock), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get(`${WEATHER_API_URL}/group`, () => {
    return new HttpResponse(JSON.stringify(weatherListMock), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
