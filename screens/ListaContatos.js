import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

function ListaContatos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Lista de Contatos
      </Text>
      <Button
        title="Cadastro de Contato"
        onPress={() => navigation.navigate('CadastroContato')}
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
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListaContatos;