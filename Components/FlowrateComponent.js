import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, View } from "react-native";
import {styles} from "../Styles"
const FlowrateComponent = () => {


    const [rateOfDispense, setRateOfDispense] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)
    const [timeRequired, setTimeRequired] = React.useState(0)

    const calculate = (sprayMixNeeded, rateOfDispense) => {
        setTimeRequired((sprayMixNeeded/rateOfDispense))
    }


    return (


        <ScrollView style={styles.format}>

            <Text>
            This dosage calculation will help in determining how long it may take to spray the building you're working with.
            </Text>

            <View style={styles.space}></View>
            
            <Text>Please enter how much spray mix is needed to fog your entire building (can be found using the Dosage calculation)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setSprayMixNeeded}
            value={sprayMixNeeded.toString()}
            keyboardType='numeric'
            />

            <Text>Please input the dispense rate of the fogger machine in mL per minute</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setRateOfDispense}
            value={rateOfDispense.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Time Required'
            onPress={() => {calculate(sprayMixNeeded,rateOfDispense)}}
            />

            <View style={[styles.space]}></View>
            {timeRequired > 0 && <Text style={[styles.answer]}>It will take a total of {timeRequired} minutes to spray {sprayMixNeeded}ml at a rate of {rateOfDispense}mL per minute</Text>}

            
        </ScrollView>
    )
}



export default FlowrateComponent
