import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from './app/screens/Login.screen';
import {Signup} from './app/screens/Signup.screen';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="Signup" component={Signup}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
