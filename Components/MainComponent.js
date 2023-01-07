import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, ScrollView, View } from "react-native";
import {styles} from "../Styles"
import DilutionComponent from './DilutionComponent'
import RatioComponent from './RatioComponent'
import VolumeComponent from './VolumeComponent'
import DosageComponent from './DosageComponent'
import FlowrateComponent from './FlowrateComponent'
import Button from './Button'

const MainComponent = ({ navigation }) => {
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
        onPress = {() => { navigation.navigate('DilutionComponent')}} 
        style={styles.mainButton}
        />
        {showDilutions && <DilutionComponent/>}
        <View style={styles.space}></View>
        <Button title='Ratio'
        onPress = {() =>  { navigation.navigate('RatioComponent') }}
        style={styles.mainButton}
        />
        {showRatio && <RatioComponent/>}
        <View style={styles.space}></View>
        <Button title='Volume'
        onPress = {() => { navigation.navigate('VolumeComponent') } }
        style={styles.mainButton}
        />
        {showVolume && <VolumeComponent/>}
        <View style={styles.space}></View>
        <Button title='Dosage'
        onPress = {() => {navigation.navigate('DosageComponent') }}
        style={styles.mainButton} 
        />
        {showDosage && <DosageComponent/>}
        <View style={styles.space}></View>
        <Button title='FlowRate'
        onPress = {() => {navigation.navigate('FlowrateComponent')  }}
        style={styles.mainButton} 
        />
        {showFlowRate&& <FlowrateComponent/>}
        <View style={styles.space}></View>
    </SafeAreaView>
    );
}

export default MainComponent
