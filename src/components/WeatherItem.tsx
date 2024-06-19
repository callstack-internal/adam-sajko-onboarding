import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {WeatherDetails} from '../types';

interface Props {
  item: WeatherDetails;
  onPress?: () => void;
}

const WeatherItem = ({item, onPress}: Props): JSX.Element => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.leftCol}>
        <Image style={styles.icon} src={getIconSource(item.weather[0].icon)} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.label}>{item.weather[0].main}</Text>
        </View>
      </View>
      <View style={styles.rightCol}>
        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>{item.main.temp}°F</Text>
        </View>
      </View>
    </Pressable>
  );
};

function getIconSource(iconCode: string) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  info: {
    gap: 4,
  },
  icon: {
    backgroundColor: '#9ddbea',
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
  },
  rightCol: {
    alignItems: 'center',
  },
  badge: {
    // badge
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeLabel: {
    fontSize: 16,
  },
});

export default WeatherItem;
