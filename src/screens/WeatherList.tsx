import React, {useCallback, useMemo} from 'react';
import {ListRenderItemInfo, SectionList, Text} from 'react-native';
import {CITY_IDS} from '../constants';
import {WeatherDetails, WeatherScreenProps} from '../types';
import {useWeatherList} from '../hooks/useWeatherList';
import {useWeather} from '../hooks/useWeather';
import {useLocation} from '../hooks/useLocation';
import Loader from '../components/Loader';
import WeatherItem from '../components/WeatherItem';
import SectionHeader from '../components/SectionHeader';

type SectionItem = {
  title: string;
  data: WeatherDetails[];
};

type Props = WeatherScreenProps<'WeatherList'>;

const WeatherList = ({navigation}: Props) => {
  const {coordinates, loading: locationLoading} = useLocation();

  const myWeather = useWeather(
    {
      latitude: coordinates?.latitude || 0,
      longitude: coordinates?.longitude || 0,
    },
    {enabled: !!coordinates},
  );

  const {data, isLoading, isRefetching, refetch} = useWeatherList(CITY_IDS);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const sections = useMemo((): SectionItem[] => {
    if (!data) {
      return [];
    }

    const result = [
      {
        title: 'Other Locations',
        data: data.list,
      },
    ];

    if (myWeather.data) {
      result.unshift({
        title: 'Current Location',
        data: [myWeather.data],
      });
    }

    return result;
  }, [data, myWeather.data]);

  const renderSectionHeader = useCallback(
    ({section}: {section: SectionItem}) => (
      <SectionHeader title={section.title} />
    ),
    [],
  );

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

  if (isLoading || myWeather.isLoading || locationLoading) {
    return <Loader />;
  }

  if (!data) {
    return <Text>No data found</Text>;
  }

  return (
    <SectionList
      keyExtractor={keyExtractor}
      onRefresh={handleRefresh}
      refreshing={isRefetching}
      sections={sections}
      renderSectionHeader={myWeather.data ? renderSectionHeader : undefined}
      renderItem={renderItem}
    />
  );
};

export default WeatherList;
