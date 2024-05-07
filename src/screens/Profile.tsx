// UserInfoScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { profile } from '../assets';
import { useNavigation } from '@react-navigation/native';

const UserInfoScreen = () => {
  // Dummy user data
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        setName(data.title);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const user = {
    name: name,
    email: 'john.doe@example.com',
    avatar: profile, // Provide path to the user's avatar image
    telephone: '+1234567890',
    password: '********', // Password should be masked or not displayed for security reasons
  };

  const handleEditPress = () => {
    // Functionality for editing user information
    console.log("Edit button pressed");
  };

  const navigation = useNavigation();   

  const handleOkayPress = () => {
    // Functionality for okay button
    navigation.navigate('Home');
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      <Image source={user.avatar} style={styles.avatar} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
        <Text style={styles.label}>Telephone:</Text>
        <Text style={styles.value}>{user.telephone}</Text>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value}>********</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOkayPress}>
        <Text style={styles.buttonText}>Okay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEditPress}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserInfoScreen;
