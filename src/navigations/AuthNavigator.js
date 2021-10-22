import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login'
const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShadowVisible:false,headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShadowVisible:false,headerShown:false}}/> 
    </Stack.Navigator>
    );
  }