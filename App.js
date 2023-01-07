import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme, adaptNavigationTheme, FAB } from 'react-native-paper';
import { StatusBar} from 'react-native'
import Circle from './Components/Volumes/Circle';
import Cube from './Components/Volumes/Cube';
import Peak from './Components/Volumes/Peak';
import Silo from './Components/Volumes/Silo';
import Square from './Components/Volumes/Square';
import Triangle from './Components/Volumes/Triangle';
import LeftDrawer from './Components/LeftDrawer';
import {styles} from './Styles';




const Stack = createNativeStackNavigator();
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });


export default function App() {
  return(
    <PaperProvider theme={MD3LightTheme}>
    <NavigationContainer theme={LightTheme}>
    <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
        <Stack.Screen
          name = "Drawer"
          component = {LeftDrawer}
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name = "Triangle"
          component = {Triangle}
          />
        <Stack.Screen
          name = "Circle"
          component = {Circle}
          />
        <Stack.Screen
          name = "Cube"
          component = {Cube}
          />
        <Stack.Screen
          name = "Peak"
          component = {Peak}
          />
        <Stack.Screen
          name = "Silo"
          component = {Silo}
          />
        <Stack.Screen
          name = "Square"
          component = {Square}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}

