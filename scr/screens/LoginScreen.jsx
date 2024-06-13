import React, { useState } from 'react';
import { View} from 'react-native';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from "../config/styles";
import { Surface, TextInput, Button, Text  } from 'react-native-paper'
import { Image } from "expo-image";

export default function LoginScreen({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const handleLogin = () => { signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) =>
     { navigation.navigate('News');
     }) .catch((error) => {
         setError(error.message);
         });
     };
return (
    <Surface>
 
    <Image
    style={{width: 414, height: 200}}
      source={require("../image/gastro.png")}
       />
 
        <Text>Bem vindo ao GastroApp!</Text>
        <TextInput  placeholder="Email" value={email}
        onChangeText={setEmail} />
        <TextInput placeholder="Password" value={password}
        onChangeText={setPassword} secureTextEntry />
 
        <Button onPress={handleLogin} >Login</Button>
        {error ? <Text>{error}</Text> : null}
 
        <Button  onPress={() => navigation.navigate("RegisterScreen")}>Cadastro</Button>
       
 
       
        </Surface>
        );
    }