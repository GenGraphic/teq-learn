import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

//import screens
import Home from './screens/Home';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  
    <NavigationContainer>
      <StatusBar />
        <Stack.Navigator initialRouteName='Home'>
          
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
});
