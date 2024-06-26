import {useQuery} from '@tanstack/react-query';
import {getWeatherList, queryKey} from '../queries/get-weather-list';

export function useWeatherList(ids: number[], config?: {enabled: boolean}) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getWeatherList(ids),
    ...config,
  });
}
