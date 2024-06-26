import {useQuery} from '@tanstack/react-query';
import {SearchParams, getWeather, queryKey} from '../queries/get-weather';

export function useWeather(params: SearchParams, config?: {enabled: boolean}) {
  const paramQueryKeys =
    'id' in params ? [params.id] : [params.latitude, params.longitude];

  return useQuery({
    queryKey: [queryKey, ...paramQueryKeys],
    queryFn: () => getWeather(params),
    ...config,
  });
}
