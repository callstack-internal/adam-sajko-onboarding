import {weatherListMock} from '../../mocks/mockData';
import {getWeatherList} from '../get-weather-list';

test('should test getWeatherList query', async () => {
  const result = await getWeatherList();
  expect(result).toEqual(weatherListMock);
});
