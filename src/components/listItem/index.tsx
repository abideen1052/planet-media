import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import { ListItemType } from '../../types/listItemTypes';

type Props = {
  item: ListItemType;
};

const ListItem = ({ item }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: item?.image,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.itemName}>
          {item?.product_name}
        </Text>
        <Text style={styles.price}>
          {item?.amount ? `₹ ${item.amount.toFixed(2)}` : ''}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;
