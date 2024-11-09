import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/screens/HomeScreen';
import MoodScreen from '../components/screens/MoodScreen';

const Stack = createNativeStackNavigator();

// Placeholder screens - replace these with your actual screen components
const ReportScreen = () => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Report Screen</Text></View>;
const FeelGoodScreen = () => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Feel Good Screen</Text></View>;
const CalendarScreen = () => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Calendar Screen</Text></View>;
const TipsScreen = () => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Tips Screen</Text></View>;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0B3D2E',
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
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="FeelGood" component={FeelGoodScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;