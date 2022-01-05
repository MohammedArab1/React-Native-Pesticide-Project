import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, SliderComponent } from 'react-native'
import Square from './Volumes/Square'
import Triangle from './Volumes/Triangle'
import Cube from './Volumes/Cube'
import Peak from './Volumes/Peak'
import Silo from './Volumes/Silo'
import Circle from './Volumes/Circle'


const VolumeComponent = () => {

    const [showSquare, setShowSquare] = React.useState(false)
    const [showTriangle, setShowTriangle] = React.useState(false)
    const [showCube, setShowCube] = React.useState(false)
    const [showPeak, setShowPeak] = React.useState(false)
    const [showCircle, setShowCircle] = React.useState(false)
    const [showSilo, setShowSilo] = React.useState(false)

    return (
        <ScrollView>
            <Text>
                Volume can be used in pesticide work to find out how much necessary pesticide is required for a particular area. 
                Let us start, Please choose the shape of the building you are trying to find the volume for.
            </Text>

            <Button 
                title='Square / rectangle Area Calculation'
                onPress = {() => (setShowSquare(!showSquare))}
            
            />

            {showSquare && <Square/>}

            <Button 
                title='Triangle Area Calculation'
                onPress = {() => (setShowTriangle(!showTriangle))} 
            />

            {showTriangle && <Triangle/>}

            <Button 
                title='Cube / cubic rectangle Volume Calculation'
                onPress = {() => (setShowCube(!showCube))} 
            />

            {showCube && <Cube/>}

            <Button 
                title='Building Peak Volume Calculation'
                onPress = {() => (setShowPeak(!showPeak))} 
            />

            {showPeak && <Peak/>}       

            <Button 
                title='Circle Area Calculation'
                onPress = {() => (setShowCircle(!showCircle))} 
            />
            {showCircle && <Circle/>} 

            <Button 
                title='Silo Volume Calculation'
                onPress = {() => (setShowSilo(!showSilo))} 
            />

            {showSilo && <Silo/>}
            


                


        </ScrollView>
    )
}

export default VolumeComponent
