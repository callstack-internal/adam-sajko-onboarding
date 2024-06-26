import {WEATHER_API_KEY, WEATHER_API_URL} from '../constants';
import {WeatherList} from '../types';

export async function getWeatherList(ids: number[]) {
  const url = `${WEATHER_API_URL}/group`;
  const qs = [
    `id=${ids.join(',')}`,
    'units=metric',
    `appId=${WEATHER_API_KEY}`,
  ];

  const response = await fetch(`${url}?${qs.join('&')}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather list with status ${response.status}`,
    );
  }

  const data = await response.json();

  return data as WeatherList;
}

export const queryKey = 'get-weather-list';
