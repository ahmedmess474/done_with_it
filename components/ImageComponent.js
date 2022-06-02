import React from 'react';
import { View, Image, SafeAreaView, StyleSheet } from 'react-native';

function ImageComponent() {
    return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width:"100%",
          flexDirection:"row",
          backgroundColor:"#000",
          alignItems:"center",
          justifyContent:"center"}}>
        <View
          style={{
            backgroundColor:"#df686d",
            height: 50,
            width: 50,
            left: -120}}/>
        <View
          style={{
            backgroundColor:"#74c2bb",
            height: 50,
            width: 50,
            right: -120}} />
      </View>
      <View 
        style={{
          flex: 4,
          backgroundColor: "green"
        }}>
        <Image 
          resizeMode='cover'
          source={require("../assets/chair.jpg")}
          style={{
            flex: 1,
            width:"100%",
          }}
        />
      </View>
      <View 
        style={{
          flex: 1,
          backgroundColor: "#000"
        }}
      />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 40
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    flexDirection:"column"
  },
});

export default ImageComponent;