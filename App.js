import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

function App() {
  return (
    <NavigationContainer>
          <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;