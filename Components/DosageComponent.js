import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";

const DosageComponent = () => {


    const [volumeBuilding, setVolumeBuilding] = React.useState(0)
    const [sprayMix, setSprayMix] = React.useState(0)
    const [volumeNeeded, setVolumeNeeded] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)

    const calculate = (volumeBuilding,volumeNeeded, sprayMix) => {
        setSprayMixNeeded((volumeBuilding / volumeNeeded) * sprayMix)
    }


    return (


        <ScrollView>

            <Text>
                Dosage calculations can be useful in determining how much spray mix you need for given a volume. As well, 
                it can help with determining how long your fogger machine may take
            </Text>


            <Text>Please enter the volume of the building you're looking to spray (in m3)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setVolumeBuilding}
            value={volumeBuilding}
            keyboardType='numeric'
            />

            <Text>Please enter how much spray mix you need (in ml) to mix per unit of volume (in m3):</Text>

            <Text>Spray mix needed(ml):</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setSprayMix}
            value={sprayMix}
            keyboardType='numeric'
            />

            <Text>Per unit of volume(m3): </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setVolumeNeeded}
            value={volumeNeeded}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Spray Mix Needed'
            onPress={() => {calculate(volumeBuilding,volumeNeeded,sprayMix)}}
            />

            {sprayMixNeeded > 0 && <Text>You will need a total of {sprayMixNeeded}ml of spray mix to spray the entire building</Text>}

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
});

export default DosageComponent
