import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroContato from './CadastroContato'
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ListaContatos;