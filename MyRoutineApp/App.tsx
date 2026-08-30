import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
 
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

   

