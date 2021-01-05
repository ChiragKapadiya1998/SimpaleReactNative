import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/screen/HomeScreen';
import Login from './components/screen/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homescreen" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;