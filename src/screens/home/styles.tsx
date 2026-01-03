import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../themes/color';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flex: 1,
  },
  offerBanner: {
    width: width - 28,
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  page: {
    width: width - 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  emptyText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
});
