import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

//import screens
import Home from './screens/Home';
import Services from './screens/Services';
import LogIn from './screens/LogIn';
import Contact from './screens/Contact';
import MyProject from './screens/MyProject';
import Learning from './screens/Learning';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  
    <NavigationContainer>
      <StatusBar />
        <Stack.Navigator initialRouteName='Home'>
          
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
          <Stack.Screen name='Services' component={Services} options={{headerShown: false}} />
          <Stack.Screen name='LogIn' component={LogIn} options={{headerShown: false}} />
          <Stack.Screen name='Contact' component={Contact} options={{headerShown: false}} />
          <Stack.Screen name='MyProject' component={MyProject} options={{headerShown: false}} />
          <Stack.Screen name='Learning' component={Learning} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
});
