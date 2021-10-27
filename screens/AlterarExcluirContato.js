import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

export default function AlterarExcluirContato({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>nome</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>telefone</Text>
      <TextInput style={styles.input} />
      <br />
      <Button
        title="Alterar"
        onPress={() => navigation.navigate('ListaContatos')}
      />
      <br />
      <Button
        title="Excluir"
        onPress={() => navigation.navigate('ListaContatos')}
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
