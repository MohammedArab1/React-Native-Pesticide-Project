import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView,ScrollView, SliderComponent } from 'react-native'
import Square from './Volumes/Square'
import Triangle from './Volumes/Triangle'
import Cube from './Volumes/Cube'
import Peak from './Volumes/Peak'
import Silo from './Volumes/Silo'
import Circle from './Volumes/Circle'
import {styles} from "../Styles"
import Button from './Button'

const VolumeComponent = () => {

    const [showSquare, setShowSquare] = React.useState(false)
    const [showTriangle, setShowTriangle] = React.useState(false)
    const [showCube, setShowCube] = React.useState(false)
    const [showPeak, setShowPeak] = React.useState(false)
    const [showCircle, setShowCircle] = React.useState(false)
    const [showSilo, setShowSilo] = React.useState(false)

    const changeButtons = [setShowSquare, setShowTriangle, setShowCube, setShowPeak, setShowCircle, setShowSilo]

    const hideButtons = (index) => {
        for (let i = 0; i < changeButtons.length; i++){
        if (i == index) {
            continue;
        }
        changeButtons[i](false)
        }
    }

    return (
        <ScrollView>
            <Text>
                Volume can be used in pesticide work to find out how much necessary pesticide is required for a particular area. 
                Let us start, Please choose the shape of the building you are trying to find the volume for.
            </Text>

            <View style={styles.space}></View>

            <Button 
                title='Square / rectangle Area Calculation'
                onPress = {() => { (setShowSquare(!showSquare)); hideButtons(0)  }}
                style={styles.secondaryButton}
            
            />


            {showSquare && <Square/>}

            <View style={styles.space}></View>

            <Button 
                title='Triangle Area Calculation'
                onPress = {() => {(setShowTriangle(!showTriangle)); hideButtons(1)  }}
                style={styles.secondaryButton}
            />

            {showTriangle && <Triangle/>}

            <View style={styles.space}></View>

            <Button 
                title='Cube / cubic rectangle Volume Calculation'
                onPress = {() => {(setShowCube(!showCube)); hideButtons(2)  }}
                style={styles.secondaryButton}
            />

            {showCube && <Cube/>}

            <View style={styles.space}></View>

            <Button 
                title='Building Peak Volume Calculation'
                onPress = {() => {(setShowPeak(!showPeak)); hideButtons(3)  }}
                style={styles.secondaryButton}
            />

            {showPeak && <Peak/>}

            <View style={styles.space}></View>       

            <Button 
                title='Circle Area Calculation'
                onPress = {() => {(setShowCircle(!showCircle)); hideButtons(4)  }}
                style={styles.secondaryButton}
            />
            {showCircle && <Circle/>} 

            <View style={styles.space}></View>

            <Button 
                title='Silo Volume Calculation'
                onPress = {() => {(setShowSilo(!showSilo)); hideButtons(5)  }}
                style={styles.secondaryButton}
            />

            {showSilo && <Silo/>}

            <View style={styles.space}></View>
            


                


        </ScrollView>
    )
}

export default VolumeComponent
