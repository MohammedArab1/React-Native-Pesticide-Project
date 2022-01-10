import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import MainComponent from './Components/MainComponent'
import DilutionComponent from './Components/DilutionComponent'
import RatioComponent from './Components/RatioComponent'
import VolumeComponent from './Components/VolumeComponent'
import DosageComponent from './Components/DosageComponent'
import FlowrateComponent from './Components/FlowrateComponent'
import Circle from './Components/Volumes/Circle';
import Cube from './Components/Volumes/Cube';
import Peak from './Components/Volumes/Peak';
import Silo from './Components/Volumes/Silo';
import Square from './Components/Volumes/Square';
import Triangle from './Components/Volumes/Triangle';
import Button from './Components/Button'
import {styles} from "./Styles"
import { StackRouter } from 'react-navigation';



const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "MainComponent"
          component = {MainComponent}
          options = {{title:'Welcome'}}
          />
          <Stack.Screen
          name = "DilutionComponent"
          component = {DilutionComponent}
          options = {{title:'Dilution'}}
          />
          <Stack.Screen
          name = "DosageComponent"
          component = {DosageComponent}
          options = {{title:'Dosage'}}
          />
          <Stack.Screen
          name = "FlowrateComponent"
          component = {FlowrateComponent}
          options = {{title:'Flowrate'}}
          />
          <Stack.Screen
          name = "RatioComponent"
          component = {RatioComponent}
          options = {{title:'Ratio'}}
          />
          <Stack.Screen
          name = "VolumeComponent"
          component = {VolumeComponent}
          options = {{title:'Volume'}}
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
  )
}

