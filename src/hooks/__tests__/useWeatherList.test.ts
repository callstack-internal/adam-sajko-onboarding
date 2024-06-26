import {renderHook, waitFor} from '@testing-library/react-native';
import {createQueryClientWrapper} from '../../test-utils';
import {CITY_IDS} from '../../constants';
import {useWeatherList} from '../useWeatherList';

test('should test useWeather hook', async () => {
  const wrapper = createQueryClientWrapper();
  const {result} = renderHook(() => useWeatherList(CITY_IDS), {wrapper});
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
