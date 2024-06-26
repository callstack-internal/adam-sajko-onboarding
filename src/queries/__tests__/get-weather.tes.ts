import {weatherDetailsMock} from '../../mocks/mockData';
import {getWeather} from '../get-weather';

test('should test getWeather query', async () => {
  const result = await getWeather({id: 756135});
  expect(result).toEqual(weatherDetailsMock);
});
