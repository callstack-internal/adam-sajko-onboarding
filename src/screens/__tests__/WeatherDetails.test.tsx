import * as React from 'react';
import {
  screen,
  render,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createQueryClientWrapper} from '../../test-utils';
import {RootNavigator} from '../../RootNavigator';

test('should check if the weather details is displayed', async () => {
  const wrapper = createQueryClientWrapper();

  render(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>,
    {wrapper},
  );

  await waitFor(() => {
    expect(screen.getByText('Warsaw')).toBeOnTheScreen();
  });

  fireEvent.press(screen.getByText('Warsaw'));

  await waitFor(() => {
    expect(screen.getByText('Wind')).toBeOnTheScreen();
  });
});
