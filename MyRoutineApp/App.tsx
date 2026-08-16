import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from './src/components/CustomButton';
import React, { useState } from 'react';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // nuevo estado para la contraseña

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomInput 
        onChangeText={setEmail} 
        value={email} 
        placeholder={'Ingresa tu correo'} 
        type='email'     
      />
      <CustomInput 
        onChangeText={setPassword}   // !
        value={password}             // !
        placeholder={'Ingresa tu contraseña'} 
        type='password'     
      />
      <CustomButton title ="Mi Boton 1" 
                    onPress={()=>{console.log("1")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});