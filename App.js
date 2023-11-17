import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Colours } from './components/Colours';

export default function App() {

  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colours.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.primary,
  },
});
