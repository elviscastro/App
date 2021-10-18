import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroUsuario from './screens/CadastroUsuario'
import ListaContatos from './screens/ListaContatos'
import CadastroContato from './screens/CadastroContato'
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>login</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>senha</Text>
      <TextInput style={styles.input} />
      <Button
        title="Login"
        onPress={() => navigation.navigate('ListaContatos')}
      />
      <br />
      <Button
        title="Cadastre-se"
        color="red"
        onPress={() => navigation.navigate('CadastroUsuario')}
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
    textAlign: 'left',
    padding: 10,
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