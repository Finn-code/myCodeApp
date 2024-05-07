import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const backgroundStyle = {
  flex: 1,
  backgroundColor: 'black',
};

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // You can implement your sign-up logic here
    // For example, you can send a request to your backend API to register the user

    // After successful sign-up, navigate back to the login page
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor='grey'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor='grey'
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor='grey'
            secureTextEntry={true}
          />
        </View>
        <Button title="Sign Up" onPress={handleSignUp} color="gold" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'gold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  input: {
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
});

export default SignUp;
