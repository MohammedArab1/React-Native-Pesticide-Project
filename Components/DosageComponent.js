import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, View } from "react-native";
import {styles} from "../Styles"
const DosageComponent = () => {


    const [volumeBuilding, setVolumeBuilding] = React.useState(0)
    const [sprayMix, setSprayMix] = React.useState(0)
    const [volumeNeeded, setVolumeNeeded] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)

    const calculate = (volumeBuilding,volumeNeeded, sprayMix) => {
        setSprayMixNeeded((volumeBuilding / volumeNeeded) * sprayMix)
    }


    return (


        <ScrollView style={styles.format}>

            <Text>
                Dosage calculations can be useful in determining how much spray mix you need for given a volume. As well, 
                it can help with determining how long your fogger machine may take
            </Text>

            <View style={styles.space}></View>

            <Text>Please enter the volume of the building you're looking to spray (in m3)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setVolumeBuilding}
            value={volumeBuilding.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter how much spray mix you need (in ml) to mix per unit of volume (in m3):</Text>
            <View style={styles.space}></View>

            <Text>Spray mix needed(ml):</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setSprayMix}
            value={sprayMix.toString()}
            keyboardType='numeric'
            />

            <Text>Per unit of volume(m3): </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setVolumeNeeded}
            value={volumeNeeded.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Spray Mix Needed'
            onPress={() => {calculate(volumeBuilding,volumeNeeded,sprayMix)}}
            />

            <View style={[styles.space]}></View>
            {sprayMixNeeded > 0 && <Text style={[styles.answer]}>You will need a total of {sprayMixNeeded}ml of spray mix to spray the entire building</Text>}

            
        </ScrollView>
    )
}



export default DosageComponent
