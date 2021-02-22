import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MovieDetails from '../container/MovieDetails';
import MovieScreen from '../container/MovieScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (

  <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="MovieScreen" component={MovieScreen} />
    <RootStack.Screen name="MovieDetails" component={MovieDetails} />
  </RootStack.Navigator>

);

export default RootStackScreen;