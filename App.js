import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Colours } from './components/Colours';
import StackRoute from './routes/StackRoute';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
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
