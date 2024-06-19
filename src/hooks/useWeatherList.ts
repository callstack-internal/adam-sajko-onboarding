import {useQuery} from 'react-query';
import {getWeatherList, queryKey} from '../queries/get-weather-list';

export function useWeatherList() {
  return useQuery({
    queryKey,
    queryFn: getWeatherList,
  });
}
