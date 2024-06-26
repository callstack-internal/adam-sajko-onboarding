import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, WeatherStackParamsList} from './types';
import WeatherList from './screens/WeatherList';
import WeatherDetails from './screens/WeatherDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();
const WeatherStack = createNativeStackNavigator<WeatherStackParamsList>();

function WeatherStackScreen() {
  return (
    <WeatherStack.Navigator>
      <WeatherStack.Screen
        name="WeatherList"
        component={WeatherList}
        options={{title: 'Weather'}}
      />
      <WeatherStack.Screen
        name="WeatherDetails"
        component={WeatherDetails}
        options={({route}) => ({title: route.params.title || 'Details'})}
      />
    </WeatherStack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Weather"
        component={WeatherStackScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
