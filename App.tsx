import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginSignUp from './src/screens/LoginSignUp';
import HomeScreen from './src/screens/functions/Home';
import SignUp from './src/screens/functions/SignUp';
import NewPage from './src/screens/Profile';
import Search from './src/screens/Search';
import DummyProfile from './src/screens/lib/DummyProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignUp">
        <Stack.Screen 
          name="Login" 
          component={LoginSignUp} 
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={NewPage} />
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
        <Stack.Screen name="DummyProfile" component={DummyProfile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
