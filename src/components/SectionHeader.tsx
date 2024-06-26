import React from 'react';
import {Text, View} from 'react-native';
import {createStyles} from '../theme';

interface Props {
  title: string;
}

const SectionHeader = ({title}: Props) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    padding: 16,
    backgroundColor: theme.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  title: {
    color: theme.text,
  },
}));

export default SectionHeader;
