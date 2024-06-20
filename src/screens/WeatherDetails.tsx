import React from 'react';
import {Text, View} from 'react-native';
import {useWeather} from '../hooks/useWeather';
import {WeatherScreenProps} from '../types';
import Loader from '../components/Loader';
import WeatherItem from '../components/WeatherItem';
import InfoItem from '../components/InfoItem';

type Props = WeatherScreenProps<'WeatherDetails'>;

const WeatherDetails = ({route}: Props): JSX.Element => {
  const {data, isLoading} = useWeather(route.params.cityId);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <Text>No data found</Text>;
  }

  return (
    <View>
      <WeatherItem item={data} />
      <InfoItem label="Humidity" value={`${data.main.humidity}%`} />
      <InfoItem label="Pressure" value={`${data.main.pressure} hPa`} />
      <InfoItem label="Wind" value={`${data.wind.speed} m/s`} />
      <InfoItem label="Visibility" value={`${data.visibility / 1000} km`} />
    </View>
  );
};

export default WeatherDetails;
