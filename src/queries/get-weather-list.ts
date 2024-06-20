import {WEATHER_API_KEY, WEATHER_API_URL, cityIds} from '../constants';
import {WeatherList} from '../types';

export async function getWeatherList() {
  const response = await fetch(
    `${WEATHER_API_URL}/group?id=${cityIds.join(',')}&appid=${WEATHER_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather list with status ${response.status}`,
    );
  }
  const data = await response.json();
  return data as WeatherList;
}

export const queryKey = 'get-weather-list';
