import {useQuery} from '@tanstack/react-query';
import {getWeather, queryKey} from '../queries/get-weather';

export function useWeather(cityId: number | string) {
  return useQuery({
    queryKey: [queryKey, cityId],
    queryFn: () => getWeather(cityId),
  });
}
