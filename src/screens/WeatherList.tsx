import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';
import {CITY_IDS} from '../constants';
import {WeatherDetails, WeatherScreenProps} from '../types';
import {useWeatherList} from '../hooks/useWeatherList';
import Loader from '../components/Loader';
import WeatherItem from '../components/WeatherItem';

type Props = WeatherScreenProps<'WeatherList'>;

const WeatherList = ({navigation}: Props): JSX.Element => {
  const {data, isLoading, isRefetching, refetch} = useWeatherList(CITY_IDS);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<WeatherDetails>) => {
      const handlePress = () => {
        navigation.navigate('WeatherDetails', {
          id: item.id,
          title: item.name,
        });
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
      onRefresh={handleRefresh}
      refreshing={isRefetching}
      data={data.list}
      renderItem={renderItem}
    />
  );
};

export default WeatherList;
