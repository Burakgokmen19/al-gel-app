import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [girisText ,setGirisText] = useState('');

  function textHandler(){
    console.log("Text Input Changed");
  }
  function buttonHandler(){
    console.log('tıkladım');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Al-Gel!</Text>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={textHandler}

      />
      
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button}>
        <Text onPress={buttonHandler} style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  button: {
    backgroundColor: '#D32F2F',
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
