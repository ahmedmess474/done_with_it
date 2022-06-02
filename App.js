import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Dimensions,Platform,Alert,SafeAreaView, Image, Button,TouchableNativeFeedback,TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomePage from './components/WelcomePage.js';
import ImageComponent from './components/ImageComponent.js';

export default function App() {
  return (
    <>
      <WelcomePage /> 
      {/* <ImageComponent /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 40
  },
  image: {
    flex: 1,
    flexDirection:"column"
  },
});

