import {WEATHER_API_KEY, WEATHER_API_URL} from '../constants';
import {WeatherDetails} from '../types';

export type SearchParams =
  | {id: number | string}
  | {latitude: number; longitude: number};

export async function getWeather(params: SearchParams) {
  const url = `${WEATHER_API_URL}/weather`;
  const qs = [];

  if ('id' in params) {
    qs.push(`id=${params.id}`);
  } else {
    qs.push(`lat=${params.latitude}`);
    qs.push(`lon=${params.longitude}`);
  }

  qs.push('units=metric');
  qs.push(`appId=${WEATHER_API_KEY}`);

  const response = await fetch(`${url}?${qs.join('&')}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather list with status ${response.status}`,
    );
  }

  const data = await response.json();

  return data as WeatherDetails;
}

export const queryKey = 'get-weather';
