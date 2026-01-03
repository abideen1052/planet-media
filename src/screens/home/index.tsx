import { FlatList, StatusBar, View } from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import colors from '../../themes/color';
import ListItem from '../../components/listItem';
import { SafeAreaView } from 'react-native-safe-area-context';

import { apiData } from '../../utils/data';

import { ProductType } from '../../types/listItemTypes';

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
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <FlatList
          data={pages}
          keyExtractor={(_, index) => `page-${index}`}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.page}>
              {item.map(product => (
                <ListItem item={product} />
              ))}
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
