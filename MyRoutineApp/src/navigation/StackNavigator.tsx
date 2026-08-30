//declarar el tipado de pantallas
//crear el stack navigator 
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
//

export type RootStackParamList = {
  LoginScreen: undefined,
  HomeScreen: {email: string},
  RegisterScreen: undefined,
  UserTabs: undefined
 
};

//
const Stack = createNativeStackNavigator<RootStackParamList>();

//
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen name="UserTabs" component={TabsNavigator} />
    </Stack.Navigator>
  );
}