import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
        Button, 
        View, 
        SafeAreaView, 
        Text,
        TextInput, 
        Alert } from 'react-native';

        const Separator = () => (
          <View style={styles.separator} />
        );
        
        const App = () => (
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.title}>
                Login:
                <TextInput
                  style={styles.input}
                  placeholder="usuário"
                />
                <br />
                Senha:
                <TextInput
                  style={styles.input}
                  placeholder="******"
                />
              </Text>
              <Button
                title="Login"
                onPress={() => console.log('Botao login pressionado')}
              />
              <Separator />
              <Button
                title="Cadastro"
                onPress={() => console.log('Botao cadastro pressionado')}
              />
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
