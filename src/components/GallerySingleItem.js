import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const makeid = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const GallerySingleItem = ({item,onClickImage }) => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.22;
  const padding = windowWidth * 0.01;
  const imageList = item.images.map(data => (
    <TouchableOpacity onPress={()=>onClickImage(data)}>
      <Image
        key={makeid(5)}
        source={{uri: data}}
        style={{
          width: imageWidth,
          height: imageWidth,
          margin: padding,
          borderWidth: 0.5,
          borderColor: 'gray',
        }}
      />
    </TouchableOpacity>
  ));
  return (
    <View style={{paddingHorizontal: padding * 2}}>
      <Text
        style={{
          fontSize: 14,
          paddingLeft: 4,
          color: 'black',
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20}}>
        {imageList}
      </View>
    </View>
  );
};

export default React.memo(GallerySingleItem);

const styles = StyleSheet.create({});
