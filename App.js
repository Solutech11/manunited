import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Start from './screens/home';
import Mainpage from './screens/mainpage';
import Singles from './screens/singlepage';
import Hotnews from './screens/allnews';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Start} options={{headerShown:false}} />
        <Stack.Screen name="home" component={Mainpage} options={{headerShown:false}} />
        <Stack.Screen name='singles' component={Singles} options={{headerShown:false}} />
        <Stack.Screen name='hotnews' component={Hotnews} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//initializing stack navigator


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
