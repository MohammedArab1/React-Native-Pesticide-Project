import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";
import {styles} from "../Styles"
const FlowrateComponent = () => {


    const [rateOfDispense, setRateOfDispense] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)
    const [timeRequired, setTimeRequired] = React.useState(0)

    const calculate = (sprayMixNeeded, rateOfDispense) => {
        setTimeRequired((sprayMixNeeded/rateOfDispense))
    }


    return (


        <ScrollView>

            <Text>
            This dosage calculation will help in determining how long it may take to spray the building you're working with.
            </Text>


            <Text>Please enter how much spray mix is needed to fog your entire building (can be found using the Dosage calculation)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setSprayMixNeeded}
            value={sprayMixNeeded}
            keyboardType='numeric'
            />

            <Text>Please input the dispense rate of the fogger machine in mL per minute</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setRateOfDispense}
            value={rateOfDispense}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Time Required'
            onPress={() => {calculate(sprayMixNeeded,rateOfDispense)}}
            />

            {timeRequired > 0 && <Text>It will take a total of {timeRequired} minutes to spray {sprayMixNeeded}ml at a rate of {rateOfDispense}mL per minute</Text>}

            
        </ScrollView>
    )
}



export default FlowrateComponent
