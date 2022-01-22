import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import usePhotos from '../hooks/usePhotos';
import {GallerySingleItem} from '../components';

const PicturesScreen = ({navigation}) => {
  const [photos, getPhotos] = usePhotos();
  
  const showImage=(uri)=>{
    navigation.navigate("ShowImage",{
      "uri":uri
    })
  }
  const renderItem = useCallback(
    ({item}) => <GallerySingleItem item={item} onClickImage={showImage} />,
    [],
  );
  useEffect(() => {
    const subcription = getPhotos();
    return subcription;
  }, []);
  return (
    <View>
      <FlatList
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        data={photos}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(PicturesScreen);

const styles = StyleSheet.create({});
