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
    width: width - 28,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  errorContainer: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.red,
    textAlign: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  retryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
