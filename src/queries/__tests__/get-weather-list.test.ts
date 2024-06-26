import {CITY_IDS} from '../../constants';
import {weatherListMock} from '../../mocks/mockData';
import {getWeatherList} from '../get-weather-list';

test('should test getWeatherList query', async () => {
  const result = await getWeatherList(CITY_IDS);
  expect(result).toEqual(weatherListMock);
});
