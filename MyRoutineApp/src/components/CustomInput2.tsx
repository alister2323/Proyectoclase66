import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

type CustomInput2Props = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}


export default function CustomInput2({ placeholder, value, onChangeText }: CustomInput2Props) {
return (
    <View style={styles.wrapper}>
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    />
    </View>
);
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 50,
    marginTop: 15,
    backgroundColor: '#fff',
  }
})