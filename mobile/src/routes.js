import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator ();

import Incidents from './pages/Incidents';
import Details from './pages/Details'



export default function Routes () {
  return (
      < NavigationContainer >

      <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="incidents"  component={ Incidents } />
          <AppStack.Screen name="Detail"  component={ Details } />
      </AppStack.Navigator>

      </ NavigationContainer >


  );
}