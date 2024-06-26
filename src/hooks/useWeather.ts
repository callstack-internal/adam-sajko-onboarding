import {useQuery} from '@tanstack/react-query';
import {SearchParams, getWeather, queryKey} from '../queries/get-weather';

export function useWeather(params: SearchParams, config?: {enabled: boolean}) {
  const paramQueryKeys = [params.id];

  return useQuery({
    queryKey: [queryKey, ...paramQueryKeys],
    queryFn: () => getWeather(params),
    ...config,
  });
}
