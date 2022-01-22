import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet,StatusBar} from 'react-native';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import {COLORS,STYLES} from './src/constants'

const App = () => {
  return (
    <NavigationContainer theme={STYLES.NavigationTheme}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
