import React from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const backgroundStyle = {
  flex: 1,
  backgroundColor: 'black',
};

const LoginSignUp = ({ username, password, setUsername, setPassword }) => {
  const navigation = useNavigation();

  const isDarkBackground = true;

  const handleLogin = () => {
    // You can implement your login logic here
    // For now, let's assume login is successful and navigate to HomeScreen
    navigation.navigate('Home');
  };

  const handleSignup = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkBackground ? "light-content" : "dark-content"}
        backgroundColor={isDarkBackground ? "#000000" : "#ffffff"}
      />
      <View style={styles.sectionContainer}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.travelText}>Travel</Text>
        </View>
        <Text style={styles.label}>Username:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter Username"
            placeholderTextColor='grey'
          />
        </View>
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            placeholderTextColor='grey'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button title='Login' onPress={handleLogin} color="gold" />
          <Button title="Sign Up" onPress={handleSignup} color="gold" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  travelText: {
    fontSize: 35,
    color: 'gold',
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  label: {
    fontSize: 18,
    marginRight: 10,
    color: 'white',
    marginTop: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: 'white',
  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  }
});

export default LoginSignUp;
