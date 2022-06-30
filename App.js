import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { HomeScreen } from './architechure/screens/Homescreen';
import Menu from './architechure/components/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFBC80',
    marginTop:StatusBar.currentHeight
  },
});
