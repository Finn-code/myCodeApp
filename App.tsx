import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignUp from './src/screens/LoginSignUp/LoginSignUp';
import HomeScreen from './src/screens/Home/Home';
import SignUp from './src/screens/SignUp/SignUp';
import NewPage from './src/screens/Profile/Profile';
import Search from './src/screens/Search/Search';
import DummyProfile from './src/lib/Data/DummyProfile';
import Form from './src/screens/functions/Form';

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
        <Stack.Screen name="Profile" component={NewPage} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
        <Stack.Screen name="DummyProfile" component={DummyProfile} options={{headerShown: false}}/>
        <Stack.Screen name='Form' component={Form} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
