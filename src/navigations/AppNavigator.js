import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maps from '../services/Map';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShadowVisible:false,headerShown:false}}/>
        <Stack.Screen name="Maps" component={Maps} options={{headerShadowVisible:false,headerShown:false}}/>
    </Stack.Navigator>
    );
  }