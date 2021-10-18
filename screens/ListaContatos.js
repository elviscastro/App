import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native';

const ListaContatos = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Lista de Contatos
      </Text>
    </View>
  </SafeAreaView>
);

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
});

export default ListaContatos;
