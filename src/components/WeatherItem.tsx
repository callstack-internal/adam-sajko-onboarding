import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {createStyles} from '../theme';
import {WeatherDetails} from '../types';

interface Props {
  item: WeatherDetails;
  onPress?: () => void;
}

const WeatherItem = ({item, onPress}: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <Pressable style={styles.container} onPress={onPress} testID={item.name}>
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

const useStyles = createStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: theme.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
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
    backgroundColor: theme.iconBackground,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  label: {
    fontSize: 16,
    color: theme.description,
  },
  rightCol: {
    alignItems: 'center',
  },
  badge: {
    backgroundColor: theme.badge,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#000',
  },
  badgeLabel: {
    fontSize: 16,
    color: theme.text,
  },
}));

export default WeatherItem;
