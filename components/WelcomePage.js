import React from 'react';
import {ImageBackground, View, Image, Text, StyleSheet} from 'react-native';

function WelcomePage(props) {
    return (
        <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
        >
        <View style={{flex: 1,top: 100}}>
            <Image 
            source={require("../assets/logo-red.png")}
            style={{
                width: 100,
                height: 100,
                alignSelf: "center",
            }}
            />
            <Text style={{alignSelf:"center"}}>
            Sell what you don't need!
            </Text>
        </View>
        <View >
            <View 
            style={{
                height:50,
                width:"100%",
                backgroundColor:"#df686d"
            }}
            />
            <View 
            style={{
                height:50,
                width:"100%",
                backgroundColor:"#74c2bb"
            }}
            />
        </View>
        </ImageBackground>
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

export default WelcomePage;