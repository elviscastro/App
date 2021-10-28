import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import axios from 'axios';

export default function CadastroContato({ navigation }) {

  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [telefone,setTelefone] = useState("");
  
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>nome</Text>
      <TextInput style={styles.input} onChangeText={nome => setNome(nome)} />
      <Text style={styles.title}>email</Text>
      <TextInput style={styles.input} onChangeText={email => setEmail(email)} />
      <Text style={styles.title}>telefone</Text>
      <TextInput style={styles.input} onChangeText={telefone => setTelefone(telefone)} />
      <br />
      <Button
        title="Salvar"
        onPress={() => {
          axios.post('http://professornilson.com/testeservico/clientes',contato);
          navigation.navigate('ListaContatos');
        }}
      />
    </View>
  </SafeAreaView>
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
});
