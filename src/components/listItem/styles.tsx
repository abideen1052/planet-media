import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes/color';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 50) / 2;

export const styles = StyleSheet.create({
  itemContainer: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: CARD_WIDTH,
    overflow: 'hidden',
    marginBottom: 16,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Shadow for Android
    elevation: 5,
  },
  image: {
    width: '100%',
    height: CARD_WIDTH - 40,
  },
  infoContainer: {
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    maxWidth: '73%',
  },
  price: {
    fontSize: 12,
    color: colors.white,
  },
});
