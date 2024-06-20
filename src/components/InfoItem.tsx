import React from 'react';
import {Text, View} from 'react-native';
import {createStyles} from '../theme';

interface Props {
  label: string;
  value: string;
}

const InfoItem = ({label, value}: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
    backgroundColor: theme.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  label: {
    color: theme.description,
  },
  value: {
    color: theme.text,
  },
}));

export default InfoItem;
