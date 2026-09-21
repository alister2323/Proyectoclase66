import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function Settings() {
  const { language, changeLanguage } = useLanguage();
  const { isDark, toggleTheme, theme } = useTheme();

  const isSpanish = language === "es";

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        {isSpanish ? "Configuración" : "Settings"}
      </Text>

      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.text }]}>
          {isSpanish ? "Modo oscuro" : "Dark mode"}
        </Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.text }]}>
          {isSpanish ? "Idioma" : "Language"}
        </Text>
        <TouchableOpacity
          style={[styles.languageButton, { backgroundColor: theme.surface }]}
          onPress={() => changeLanguage(isSpanish ? "en" : "es")}
        >
          <Text style={[styles.languageText, { color: theme.accent }]}>
            {isSpanish ? "Español" : "English"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  languageButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  languageText: {
    fontWeight: "700",
  },
});