import { ImageBackground, StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import React from 'react';

const ShowImage = ({route}) => {
    const deviceHeight=Dimensions.get('window').height;
    const deviceWidth=Dimensions.get('window').width;
    const {uri}=route.params;
  return (
    <View>
      <Image source={{uri:uri}} style={{height:deviceHeight,width:deviceWidth,backgroundColor:'black'}} resizeMode="contain"/>
    </View>
  );
};

export default ShowImage;

const styles = StyleSheet.create({});
