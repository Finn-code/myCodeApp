import React from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  date: yup.date().required(),
  fullName: yup.string().required(),
  ic: yup.string().required(),
  phoneNumber: yup.string().required(),
  address: yup.string().required(),
  remarks: yup.string(),
});

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          date: '',
          fullName: '',
          ic: '',
          phoneNumber: '',
          address: '',
          remarks: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Date"
              onChangeText={handleChange('date')}
              onBlur={handleBlur('date')}
              value={values.date}
            />

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />

            <TextInput
              style={styles.input}
              placeholder="IC"
              onChangeText={handleChange('ic')}
              onBlur={handleBlur('ic')}
              value={values.ic}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
            />

            <TextInput
              style={styles.input}
              placeholder="House Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Remarks"
              onChangeText={handleChange('remarks')}
              onBlur={handleBlur('remarks')}
              value={values.remarks}
              multiline
            />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContaineir: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 80,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});

export default RegisterForm;

