import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
  } from 'react-native';
const BottomTabButton=({onPress, style, accessibilityState: {selected},labelname}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          style,
          {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 50,
          },
        ]}>
        <Text style={{fontSize: 14, color: selected?"black":"gray",fontWeight:selected?'bold':'normal'}}>{labelname}</Text>
        {selected ? (
          <View
            style={{
              width: 60,
              backgroundColor: 'black',
              height: 2,
            }}></View>
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
    );
  }

  export default BottomTabButton