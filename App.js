import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import DilutionComponent from './Components/DilutionComponent'
import RatioComponent from './Components/RatioComponent'
import VolumeComponent from './Components/VolumeComponent'
import DosageComponent from './Components/DosageComponent'
import FlowrateComponent from './Components/FlowrateComponent'
import Button from './Components/Button'
import {styles} from "./Styles"

export default function App() {

  const [showDilutions, setShowDilutions] = React.useState(false)
  const [showRatio, setShowRatio] = React.useState(false)
  const [showVolume, setShowVolume] = React.useState(false)
  const [showDosage, setShowDosage] = React.useState(false)
  const [showFlowRate, setShowFlowRate] = React.useState(false)

  const changeButtons = [setShowDilutions, setShowRatio, setShowVolume, setShowDosage, setShowFlowRate]



  //Function to run on every button click, makes sure that only one component is expanded at time. 
  //Iterates through each setState in the changeButtons array above and if the given index matches the iterator, will skip the current iteration
  //Otherwise, uses the current setState in the iteration to set the state to false.
  const hideButtons = (index) => {
    for (let i = 0; i < changeButtons.length; i++){
      if (i == index) {
        continue;
      }
      changeButtons[i](false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>PESTICIDE CALCULATOR</Text>
      <View style={styles.space}></View>
      <Button 
      title='Dilutions'
      onPress = {() => { setShowDilutions(!showDilutions); hideButtons(0)  }} 
      style={styles.mainButton}
      />
      {showDilutions && <DilutionComponent/>}
      <View style={styles.space}></View>
      <Button title='Ratio'
      onPress = {() =>  { (setShowRatio(!showRatio)); hideButtons(1)  }}
      style={styles.mainButton}
      />
      {showRatio && <RatioComponent/>}
      <View style={styles.space}></View>
      <Button title='Volume'
      onPress = {() => { (setShowVolume(!showVolume)); hideButtons(2) } }
      style={styles.mainButton}
      />
      {showVolume && <VolumeComponent/>}
      <View style={styles.space}></View>
      <Button title='Dosage'
      onPress = {() => {(setShowDosage(!showDosage)); hideButtons(3)  }}
      style={styles.mainButton} 
      />
      {showDosage && <DosageComponent/>}
      <View style={styles.space}></View>
      <Button title='FlowRate'
      onPress = {() => {(setShowFlowRate(!showFlowRate)); hideButtons(4)  }}
      style={styles.mainButton} 
      />
      {showFlowRate&& <FlowrateComponent/>}
      <View style={styles.space}></View>
    </SafeAreaView>
  );
}

