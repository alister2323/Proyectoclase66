import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";
import { useTheme } from "../contexts/ThemeContext";

type NestedProps = CompositeScreenProps<
  BottomTabScreenProps<TabsParamList, "HomeTab">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Home({ navigation, route }: NestedProps) {
  const { email } = route.params;
  const { theme, isDark } = useTheme();

  const styles = createStyles(theme, isDark);

  const handleUserSettings = () => {
    navigation.navigate("Settings");
  };

  const handleLogout = () => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        routes: [{ name: "LoginScreen" }],
        index: 0,
      });
    }
  };

  const handleNavigate = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido, {email}</Text>
      <CustomButton title="Ir a Preferencias de Usuario" onPress={handleUserSettings} variant="primary" />
      <CustomButton title="Cerrar Sesion" variant="secondary" onPress={handleLogout} />
      <CustomButton title="Ir atras" variant="tertiary" onPress={handleNavigate} />
    </View>
  );
}

const createStyles = (theme: any, isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      paddingBottom: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
    },
    welcome: {
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 20,
      color: theme.text,
    },
  });