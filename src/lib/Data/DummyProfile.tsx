import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PersonReceived } from './dummyData';
import BackButton from '../../screens/functions/backbutton';
import { profile } from '../../assets';

const DummyProfile = ({ route }) => {
  // Extract the userId from the navigation route parameters
  const { userId } = route.params;

  // Find the user with the matching userId from the dummy data
  const user = PersonReceived.find(person => person.id === userId);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <BackButton/>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
        <View style={styles.bottomSection}>
            <View style={{ width: "100%", marginTop: 100, alignItems: 'center' }}>
              <Image source={profile} style={{ height: 200, width: 200,  }}/>
            </View>
            <View style={{width: "90%", marginTop: 50,}}>
              {user ? (
                <>
                  <Text style={styles.subtitle}>User Profile</Text>
                  <Text style={styles.text}>Name: {user.name}</Text>
                  <Text style={styles.text}>Address: {user.address}</Text>
                  <Text style={styles.text}>Bantuan: {user.bantuan}</Text>
                  <Text style={styles.text}>Number: {user.number}</Text>
                  {/* Add more profile information as needed */}
                </>
              ) : (
                // Display a message if user is not found
                <Text style={styles.text}>User not found</Text>
              )}
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: '15%',
    justifyContent: 'center', // Center items vertically
    backgroundColor: '#FFC0CB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bottomSection: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center', // Align items to the left
    paddingHorizontal: 20, // Add horizontal padding to create space from the left edge
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text\
    marginTop: 30,
   
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'left', // Align text to the left

  },
});


export default DummyProfile;
