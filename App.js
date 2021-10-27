import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroUsuario from './screens/CadastroUsuario'
import ListaContatos from './screens/ListaContatos'
import CadastroContato from './screens/CadastroContato'
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

const Separator = () => (
    <View style={styles.separator} />
);

function HomeScreen({ navigation }) {
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyBwIKpylu9h_1CumFvUDB6vPDlpd3yvhy4",
    authDomain: "app-firebase-d302c.firebaseapp.com",
    projectId: "app-firebase-d302c",
    storageBucket: "app-firebase-d302c.appspot.com",
    messagingSenderId: "721207112818",
    appId: "1:721207112818:web:844869fdeac34049c03eeb",
    measurementId: "G-32RM8S0Z9X"
  };

  function cadastrarFirebase(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  
  function loginFirebase(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('ListaContatos');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const app = initializeApp(firebaseConfig);

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>login</Text>
      <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
      <Text style={styles.title}>senha</Text>
      <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={senha => setSenha(senha)} />
      <Button
        title="Login"
        onPress={() => {loginFirebase()}}
      />
      <br />
      <Button
        title="Cadastre-se"
        color="red"
        onPress={() => {cadastrarFirebase()}}
      />
    </View>
  </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyBwIKpylu9h_1CumFvUDB6vPDlpd3yvhy4",
    authDomain: "app-firebase-d302c.firebaseapp.com",
    projectId: "app-firebase-d302c",
    storageBucket: "app-firebase-d302c.appspot.com",
    messagingSenderId: "721207112818",
    appId: "1:721207112818:web:844869fdeac34049c03eeb",
    measurementId: "G-32RM8S0Z9X"
  };

  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    margin: 12,
    textAlign: 'left',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;