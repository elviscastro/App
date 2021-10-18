import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native';

const CadastroUsuario = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Cadastro
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

export default CadastroUsuario;
