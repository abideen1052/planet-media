import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
  },
  page: {
    width: width - 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
