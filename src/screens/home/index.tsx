import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useMemo } from 'react';
import { styles } from './styles';
import colors from '../../themes/color';
import ListItem from '../../components/listItem';

import { ProductType } from '../../types/listItemTypes';
import FastImage from 'react-native-fast-image';
import images from '../../themes/images';
import HeaderSection from '../../components/headerSection';
import { useFetch } from '../../utils/hooks/useFetch';
import { apiEndpoints } from '../../api/config';
import { ListingShimmer } from '../../components/shimmer';

const { width } = Dimensions.get('window');
const PAGE_WIDTH = width - 28;

const createPages = (productList: ProductType[]): ProductType[][] => {
  if (!productList || productList.length === 0) {
    return [];
  }
  const pages: ProductType[][] = [];

  // Initial load shows 6 items
  pages.push(productList.slice(0, 6));

  // Subsequent swipes load sets of 5 items
  let index = 6;
  while (index < productList.length) {
    pages.push(productList.slice(index, index + 5));
    index += 5;
  }

  return pages;
};

const HomeScreen = () => {
  const { data, isLoading, error, makeRequest } = useFetch();

  const handleFetchData = useCallback(() => {
    makeRequest({
      endPoint: apiEndpoints.getItems,
      method: 'GET',
    });
  }, [makeRequest]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  const pages = useMemo(() => {
    if (data?.data?.products) {
      return createPages(data.data.products);
    }
    return [];
  }, [data]);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: PAGE_WIDTH,
      offset: PAGE_WIDTH * index,
      index,
    }),
    [],
  );

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
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <HeaderSection leftIcon="backArrow" rightIcon="notification" />
      <ScrollView style={styles.scrollContainer}>
        <FastImage source={images.offerBanner} style={styles.offerBanner} />
        {isLoading || (!data && !error) ? (
          <ListingShimmer />
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {error?.message || 'Something went wrong'}
            </Text>
            <TouchableOpacity
              style={styles.retryButton}
              onPress={handleFetchData}
            >
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={pages}
            keyExtractor={(_, index) => `page-${index}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            initialNumToRender={1}
            maxToRenderPerBatch={1}
            windowSize={3}
            removeClippedSubviews={true}
            decelerationRate="fast"
            ListEmptyComponent={renderEmpty}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
