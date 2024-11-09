import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/screens/HomeScreen';
import MoodScreen from '../components/screens/MoodScreen';

const Stack = createNativeStackNavigator();  // Changed to native stack

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Health Tracker' }}
        />
        <Stack.Screen 
          name="Mood" 
          component={MoodScreen}
          options={{ title: 'Mood Tracker' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;