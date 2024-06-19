import {WEATHER_API_KEY, WEATHER_API_URL} from '../constants';
import {WeatherDetails} from '../types';

export async function getWeather(id: number | string) {
  const response = await fetch(
    `${WEATHER_API_URL}/weather?id=${id}&appid=${WEATHER_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather list with status ${response.status}`,
    );
  }
  const data = await response.json();
  return data as WeatherDetails;
}

export const queryKey = 'get-weather';
