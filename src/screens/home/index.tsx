import { FlatList, StatusBar, Text, View } from 'react-native';
import React, { useCallback, useEffect, useMemo } from 'react';
import { styles } from './styles';
import colors from '../../themes/color';
import ListItem from '../../components/listItem';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProductType } from '../../types/listItemTypes';
import FastImage from 'react-native-fast-image';
import images from '../../themes/images';
import HeaderSection from '../../components/headerSection';
import { useFetch } from '../../utils/hooks/useFetch';
import { apiEndpoints } from '../../api/config';
import { ListingShimmer } from '../../components/shimmer';

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
  const { data, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    makeRequest({
      endPoint: apiEndpoints.getItems,
      method: 'GET',
    });
  }, [makeRequest]);

  const pages = useMemo(() => {
    if (data?.data?.products) {
      return createPages(data.data.products);
    }
    return [];
  }, [data]);

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
  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Data Found</Text>
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
        {isLoading ? (
          <ListingShimmer />
        ) : (
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
            ListEmptyComponent={renderEmpty}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
