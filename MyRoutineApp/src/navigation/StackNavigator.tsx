import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNavigator from "./TabsNavigator";
import { TabsParamList } from "./TabsNavigator";

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  UserTabs: {
    screen?: keyof TabsParamList;
    params?: Partial<Record<keyof TabsParamList, any>>;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="UserTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}
