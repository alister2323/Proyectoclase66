import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import Home from "../screens/Home";

export type TabsParamList = {
  HomeTab: { email: string };
  Explore: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={Home}
        initialParams={{ email: "usuario" }}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Profile}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configuración",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}