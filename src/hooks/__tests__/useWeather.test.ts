import {renderHook, waitFor} from '@testing-library/react-native';
import {createQueryClientWrapper} from '../../test-utils';
import {useWeather} from '../useWeather';

test('should test useWeather hook', async () => {
  const wrapper = createQueryClientWrapper();
  const {result} = renderHook(() => useWeather(756135), {wrapper});
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
