import React from 'react'
import {ScrollView, View } from "react-native";
import {styles} from "../Styles"
import {Text, TextInput, Portal, FAB} from 'react-native-paper';
import DialogComponent from './DialogComponent';
import Button from './Button';



const DosageComponent = () => {
    const [volumeBuilding, setVolumeBuilding] = React.useState(0)
    const [sprayMix, setSprayMix] = React.useState(0)
    const [volumeNeeded, setVolumeNeeded] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    const calculate = (volumeBuilding,volumeNeeded, sprayMix) => {
        setSprayMixNeeded((volumeBuilding / volumeNeeded) * sprayMix)
    }

    const isEmpty=() => {
        if (volumeBuilding == 0 || sprayMix == 0 || volumeNeeded == 0) {
            return true
        }
        return false
    }

    const fabHelp = "Dosage calculations can be useful in determining how much spray mix you need for given a volume. As well, it can help with determining how long your fogger machine may take"


    return (

        <Portal.Host>
        <ScrollView style={styles.format}>

            <Text>Please enter the volume of the building you're looking to spray (in m3)</Text>
            <TextInput
            mode="flat"
            onChangeText={setVolumeBuilding}
            value={volumeBuilding.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter how much spray mix you need (in ml) to mix per unit of volume (in m3):</Text>
            <View style={styles.space}></View>
            <Text>Spray mix needed(ml):</Text>
            <TextInput
            mode="flat"
            onChangeText={setSprayMix}
            value={sprayMix.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Per unit of volume(m3): </Text>
            <TextInput
            mode="flat"
            onChangeText={setVolumeNeeded}
            value={volumeNeeded.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Button 
            title='Calculate Spray Mix Needed'
            onPress={() => {calculate(volumeBuilding,volumeNeeded,sprayMix);showDialog()}}
            />

            <View style={[styles.space]}></View>
            <Portal>
                <DialogComponent title="Calculation Results" paragraph={isEmpty() ? "None of the values can be 0. Please input valid values." :`You will need a total of ${sprayMixNeeded}ml of spray mix to spray the entire building`} visible={visible} hideDialog={hideDialog} />
                <DialogComponent title="Help" paragraph={fabHelp} visible={fabDialogVisible} hideDialog={hideFabDialog} />
                <FAB
                icon="help"
                style={styles.fab}
                onPress={() => showFabDialog()}
                />
            </Portal>
        </ScrollView>
        </Portal.Host>
    )
}



export default DosageComponent
