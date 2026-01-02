import { StatusBar, StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  
} from 'react-native-safe-area-context';

function App() {
  

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={ 'dark-content'} backgroundColor="#fff"/>
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
