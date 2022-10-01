import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './architechure/components/AuthNavigator';
import { Signup } from './architechure/screens/Signup';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
      <ExpoStatusBar style="auto" /> */}
      <Signup />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:StatusBar.currentHeight
  },
});


