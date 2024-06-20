import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {
  ColorSchemeName,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  useColorScheme,
} from 'react-native';

interface Theme {
  background: string;
  card: string;
  text: string;
  description: string;
  border: string;
  badge: string;
  iconBackground: string;
}

interface DynamicStyles<T> {
  dark: T;
  light: T;
}

const lightTheme: Theme = {
  background: DefaultTheme.colors.background,
  card: DefaultTheme.colors.card,
  text: DefaultTheme.colors.text,
  description: '#666',
  border: DefaultTheme.colors.border,
  badge: '#f0f0f0',
  iconBackground: '#9ddbea',
};

const darkTheme: Theme = {
  background: DarkTheme.colors.background,
  card: DarkTheme.colors.background,
  text: DarkTheme.colors.text,
  description: '#ccc',
  border: DarkTheme.colors.border,
  badge: '#222',
  iconBackground: '#222',
};

export function createStyles<
  T extends {[P in keyof T]: ViewStyle | TextStyle | ImageStyle},
>(creator: (theme: Theme, scheme: ColorSchemeName) => T): () => T {
  const dynamicStyles: DynamicStyles<T> = {
    light: StyleSheet.create(creator(lightTheme, 'light')),
    dark: StyleSheet.create(creator(darkTheme, 'dark')),
  };
  return () => {
    const scheme = useColorScheme();
    return dynamicStyles[scheme || 'light'];
  };
}
