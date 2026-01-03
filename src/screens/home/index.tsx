import { StatusBar, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import colors from '../../themes/color';
import ListItem from '../../components/listItem';
import { SafeAreaView } from 'react-native-safe-area-context';

//import { apiData } from '../../utils/data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <ListItem
          item={{
            imageUri: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            name: 'Product Name',
            price: 999,
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
