import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  value: string;
}

const InfoItem = ({label, value}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    color: '#000',
  },
  value: {
    color: '#000',
  },
});

export default InfoItem;
