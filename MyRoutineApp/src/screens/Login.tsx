import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


export default function Login({navigation}: any) {

      const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // nuevo estado para la contraseña
    const handleLogin = () => {
    

        navigation.navigate('HomeScreen',{email} ); 
    }
    
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
           <CustomButton title ="Iniciar Sesión" 
                         onPress={handleLogin}/>
         </View>
    )
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });