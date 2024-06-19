import {useQuery} from 'react-query';
import {getWeather, queryKey} from '../queries/get-weather';

export function useWeather(cityId: number | string) {
  return useQuery({
    queryKey,
    queryFn: () => getWeather(cityId),
  });
}
