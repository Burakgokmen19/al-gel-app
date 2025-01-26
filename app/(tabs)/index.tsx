import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleRegister() {
    try {

      const apiUrl = 'https://your-backend-url.com/api/register';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Başarılı', 'Kayıt başarılı!'); // Başarı mesajı
        console.log('API Response:', data);
      } else {
        Alert.alert('Hata', data.message || 'Bir hata oluştu.'); // Hata mesajı
        console.error('API Hatası:', data);
      }
    } catch (error) {
      Alert.alert('Hata', 'Bir bağlantı hatası oluştu.');
      console.error('Bağlantı Hatası:', error);
    }
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
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
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
