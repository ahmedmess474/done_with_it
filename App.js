import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform,Alert,SafeAreaView, Image, Button,TouchableNativeFeedback,TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello Ahmed!
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("image clicked")}>
        <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            fadeDuration={5000}
            style={{ width: 200, height: 200 }}
          />
      </TouchableNativeFeedback>
      <Image source={require("./assets/icon.png")} style={{ width: 200, height: 200 }} />
      <Button title="Alert!" onPress={() => Alert.alert("My title", "My Message", [
        {
          text:"Yes",
          onPress: () => console.log("yes")
        },
        {
          text: "No",
          onPress: () => console.log("no")
        }
      ])}/>
    </SafeAreaView>
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


