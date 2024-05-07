import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HorizontalList from './HorizontalList'; // Import the HorizontalList component
import { useNavigation} from '@react-navigation/native';
import { profile, home_Icon, search_icon} from '../../assets/index';
import constant from '../lib/constant';


const data = [
  { id: '1', icon: search_icon, name: 'Search', screen: 'Search' },
];

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  

  const handlePress = (screen: string) => {
    // Function to be executed when the button is pressed
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          children={() => <InnerHomeScreen handlePress={handlePress} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={home_Icon}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Tab.Navigator>
      
    </View>
  );
};

const InnerHomeScreen = ({handlePress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      </View>
      <View style={styles.bottomSection}>
        <View style={{ height: 200, marginTop: 75}}>
          <Text style={{ marginLeft: 10 }}>Features</Text>
          <HorizontalList
            data={data}
            onPress={(screen) => handlePress(screen)}
          />
        </View>

      </View>
      <View style={styles.infoContainer} />
      <View style={styles.iconTextContainer}>
          <>
            <Text style={styles.profileText}>Hello Guest</Text>
            <TouchableOpacity style={styles.profileButton} onPress={() => handlePress('Profile')}>
              <Image source={profile} style={styles.profileIcon}/>
            </TouchableOpacity>
          </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: '25%', // Adjusted height for the top section
    backgroundColor: '#DB8E8C', // Background color for the top section
  },
  bottomSection: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  iconTextContainer: {
    position: 'absolute',
    top: constant.topPadding,
    right: constant.rightPadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: constant.secondaryColor,
    borderRadius: constant.profileButtonSize, // Ensure the icon button is circular
    padding: constant.profileButtonPadding,
  },
  profileIcon: {
    width: constant.profileButtonSize,
    height: constant.profileButtonSize,
    resizeMode: 'contain', // Ensure the image fits within the container
  },
  profileText: {
    fontSize: 16,
    color: 'white',
    paddingRight: 10,
  },
  infoContainer: {
    width: '90%',
    height: 100,
    backgroundColor: '#505050',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '17%', // Place the container at 50% of the container's height
    marginTop: 0, // Adjust the negative margin to center the container vertically
    elevation: 5, // Add elevation to create a shadow effect
  },
});

export default HomeScreen;
