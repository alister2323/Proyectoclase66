import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import react from "react";

export type TabsParamList = {
  Profile: undefined;
  Settings: undefined;
  HomeTab: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}