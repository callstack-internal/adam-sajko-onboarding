import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';
import {useWeatherList} from '../hooks/useWeatherList';
import {WeatherDetails, WeatherScreenProps} from '../types';
import Loader from '../components/Loader';
import WeatherItem from '../components/WeatherItem';

type Props = WeatherScreenProps<'WeatherList'>;

const WeatherList = ({navigation}: Props): JSX.Element => {
  const {data, isLoading} = useWeatherList();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<WeatherDetails>) => {
      const handlePress = () => {
        navigation.navigate('WeatherDetails', {cityId: item.id});
      };

      return <WeatherItem item={item} onPress={handlePress} />;
    },
    [navigation],
  );

  const keyExtractor = useCallback(
    (item: WeatherDetails) => item.id.toString(),
    [],
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <Text>No data found</Text>;
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data.list}
      renderItem={renderItem}
    />
  );
};

export default WeatherList;
