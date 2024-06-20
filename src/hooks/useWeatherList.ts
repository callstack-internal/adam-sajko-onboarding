import {useQuery} from '@tanstack/react-query';
import {getWeatherList, queryKey} from '../queries/get-weather-list';

export function useWeatherList() {
  return useQuery({
    queryKey: [queryKey],
    queryFn: getWeatherList,
  });
}
