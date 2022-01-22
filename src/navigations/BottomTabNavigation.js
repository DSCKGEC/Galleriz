import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {BottomTabButton} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PicturesScreen, StoriesScreen, AlbumsScreen,ShowImage} from '../screens';
import Ionicons from 'react-native-vector-icons/Entypo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack=createNativeStackNavigator();
const StackNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Gallery" component={PicturesScreen}/>
      <Stack.Screen name="ShowImage" component={ShowImage}/>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          elevation: 0,
        },
        headerTitle: '',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarButton: props => (
          <BottomTabButton labelname={route.name} {...props} />
        ),
      })}>
      <BottomTab.Screen name="Pictures" component={StackNavigator} />
      <BottomTab.Screen name="Albums" component={AlbumsScreen} />
      <BottomTab.Screen name="Stories" component={StoriesScreen} />
      <BottomTab.Screen
        name="Menu"
        component={StoriesScreen}
        options={{
          tabBarButton: ({onPress}) => (
            <TouchableOpacity
              onPress={onPress}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabNavigator;
