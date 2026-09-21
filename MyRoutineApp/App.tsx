import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/NavigationService";
import { AuthProvider } from "./src/contexts/AuthContext";
import { LanguageProvider } from "./src/contexts/LanguageContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}


