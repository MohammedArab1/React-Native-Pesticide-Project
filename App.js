import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import SecondCalc from './Components/SecondCalc'
import DilutionComponent from './Components/DilutionComponent'
import RatioComponent from './Components/RatioComponent'

export default function App() {

  const [showDilutions, setShowDilutions] = React.useState(false)
  const [showRatio, setShowRatio] = React.useState(false)
  const [showVolume, setShowVolume] = React.useState(false)
  const [showDosage, setShowDosage] = React.useState(false)


  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title='Dilutions'
      onPress = {() => (setShowDilutions(!showDilutions))} />
      {showDilutions && <DilutionComponent/>}
      <Button title='Ratio'
      onPress = {() => (setShowRatio(!showRatio))} 
      />
      {showRatio && <RatioComponent/>}
      <Button title='Volume'
      onPress = {() => (setShowVolume(!showVolume))} 
      />
      <Button title='Dosage'
      onPress = {() => (setShowDosage(!showDosage))} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*<Button 
      title='Calculate Dilutions'
      onPress = {() => (setShowDilutions(!showDilutions))} />
      <Button title='Calculate Ratio'
      />
      <Button title='Calculate Volume'
      />
      <Button title='Calculate Dosage'
      /> */