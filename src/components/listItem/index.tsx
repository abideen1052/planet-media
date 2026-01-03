import { ActivityIndicator, Text, View } from 'react-native';
import React, { memo, useState } from 'react';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import { ListItemType } from '../../types/listItemTypes';
import images from '../../themes/images';
import colors from '../../themes/color';

type Props = {
  item: ListItemType;
};

const ListItem = ({ item }: Props) => {
  const [hasError, setHasError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.image}>
        <FastImage
          style={styles.image}
          source={
            item?.image && !hasError
              ? {
                  uri: item.image,
                  priority: FastImage.priority.normal,
                  cache: FastImage.cacheControl.immutable,
                }
              : images.placeholder
          }
          onLoadStart={() => {
            setImageLoading(true);
          }}
          onLoadEnd={() => {
            setImageLoading(false);
          }}
          onError={() => {
            setHasError(true);
            setImageLoading(false);
          }}
          defaultSource={images.placeholder}
          resizeMode={FastImage.resizeMode.contain}
        />
        {imageLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        )}
      </View>
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

export default memo(ListItem);
