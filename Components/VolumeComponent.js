import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView,ScrollView, SliderComponent, Image } from 'react-native'
import Square from './Volumes/Square'
import Triangle from './Volumes/Triangle'
import Cube from './Volumes/Cube'
import Peak from './Volumes/Peak'
import Silo from './Volumes/Silo'
import Circle from './Volumes/Circle'
import {styles} from "../Styles"
import Button from './Button'

const VolumeComponent = ({navigation}) => {

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
            <Text style={styles.format}>
                Volume can be used in pesticide work to find out how much necessary pesticide is required for a particular area. 
                Let us start, Please choose the shape of the building you are trying to find the volume for.
            </Text>

            <View style={styles.space}></View>

            <Button 
                title='Square / rectangle Area Calculation'
                onPress = {() => {  navigation.navigate('Square')  }}
                style={styles.secondaryButton}
            
            />


            {showSquare && <Square/>}

            <View style={styles.space}></View>

            <Button 
                title='Triangle Area Calculation'
                onPress = {() => { navigation.navigate('Triangle')  }}
                style={styles.secondaryButton}
            />

            {showTriangle && <Triangle/>}

            <View style={styles.space}></View>


            <Button 
                title='Cube / cubic rectangle Volume Calculation'
                onPress = {() => {navigation.navigate('Cube')  }}
                style={styles.secondaryButton}
            />

            {showCube && <Cube/>}

            <View style={styles.space}></View>

            <Button 
                title='Building Peak Volume Calculation'
                onPress = {() => {navigation.navigate('Peak')  }}
                style={styles.secondaryButton}
            />

            {showPeak && <Peak/>}

            <View style={styles.space}></View>       

            <Button 
                title='Circle Area Calculation'
                onPress = {() => {navigation.navigate('Circle')   }}
                style={styles.secondaryButton}
            />
            {showCircle && <Circle/>} 

            <View style={styles.space}></View>

            <Button 
                title='Silo Volume Calculation'
                onPress = {() => {navigation.navigate('Silo')  }}
                style={styles.secondaryButton}
            />

            {showSilo && <Silo/>}

            <View style={styles.space}></View>
            


                


        </ScrollView>
    )
}

export default VolumeComponent
