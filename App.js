import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signin, Signup, Todo} from './components/screens';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
        <Stack.Screen name="Todo" component={Todo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
