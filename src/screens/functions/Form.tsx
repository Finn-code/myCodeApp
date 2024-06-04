import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BackButton from './backbutton';
import RegisterForm from '../RegisterForm/RegisterForm';

const Form = () =>{
  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Form</Text>
        </View>
      </View>
      <View style={styles.BottomSection}>
        <RegisterForm/>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TopSection: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    backgroundColor: '#FFC0CB',
  },
  BottomSection: {
    flex: 6,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
  },

});

export default Form;
