import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {back_icon} from '../../assets/index';
 

const BackButton = ({ text }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={styles.backButton}>
      <Image
        source={back_icon}
        style={styles.backIcon}
        resizeMode='contain'
        
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 24,
    left:10,
    zIndex: 999,    
  },
  backIcon: {
    width: 40,
    height: 40,
  },

})


export default BackButton;
