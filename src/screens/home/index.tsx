import { FlatList, StatusBar, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { styles } from './styles';
import colors from '../../themes/color';
import ListItem from '../../components/listItem';
import { SafeAreaView } from 'react-native-safe-area-context';

import { apiData } from '../../utils/data';

import { ProductType } from '../../types/listItemTypes';
import FastImage from 'react-native-fast-image';
import images from '../../themes/images';
import HeaderSection from '../../components/headerSection';

const products: ProductType[] = apiData.data.products;

const createPages = (productList: ProductType[]): ProductType[][] => {
  const pages: ProductType[][] = [];

  pages.push(productList.slice(0, 6));

  let index = 6;
  while (index < productList.length) {
    pages.push(productList.slice(index, index + 5));
    index += 5;
  }

  return pages;
};

const HomeScreen = () => {
  const pages = useMemo(() => createPages(products), []);

  const renderItem = useCallback(
    ({ item }: { item: ProductType[] }) => (
      <View style={styles.page}>
        {item.map(product => (
          <ListItem key={product.id} item={product} />
        ))}
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <HeaderSection leftIcon="backArrow" rightIcon="notification" />
        <FastImage source={images.offerBanner} style={styles.offerBanner} />
        <FlatList
          data={pages}
          keyExtractor={(_, index) => `page-${index}`}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={3}
          removeClippedSubviews={true}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
