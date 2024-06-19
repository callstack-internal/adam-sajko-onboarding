import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useWeather} from '../hooks/useWeather';
import {WeatherScreenProps} from '../types';
import Loader from '../components/Loader';
import WeatherItem from '../components/WeatherItem';

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
      <View style={styles.section}>
        <Text>Humidity</Text>
        <Text>{data.main.humidity}%</Text>
      </View>
      <View style={styles.section}>
        <Text>Pressure</Text>
        <Text>{data.main.pressure} hPa</Text>
      </View>
      <View style={styles.section}>
        <Text>Wind</Text>
        <Text>{data.wind.speed} m/s</Text>
      </View>
      <View style={styles.section}>
        <Text>Visibility</Text>
        <Text>{data.visibility / 1000} km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default WeatherDetails;
