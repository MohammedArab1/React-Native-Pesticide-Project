import React from 'react'
import { ScrollView, View } from "react-native";
import {styles} from "../Styles"
import {Text, TextInput, Portal, FAB} from 'react-native-paper';
import DialogComponent from './DialogComponent';
import Button from './Button';



const FlowrateComponent = () => {


    const [rateOfDispense, setRateOfDispense] = React.useState(0)
    const [sprayMixNeeded, setSprayMixNeeded] = React.useState(0)
    const [timeRequired, setTimeRequired] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    const calculate = (sprayMixNeeded, rateOfDispense) => {
        setTimeRequired((sprayMixNeeded/rateOfDispense))
    }

    const isEmpty = () => {
        if (rateOfDispense ==0 || sprayMixNeeded ==0) {
            return true
        }
        return false
    }

    const fabHelp = "This dosage calculation will help in determining how long it may take to spray the building you're working with."


    return (

        <Portal.Host>
        <ScrollView style={styles.format}>
            
            <Text>Please enter how much spray mix is needed to fog your entire building (can be found using the Dosage calculation)</Text>
            <TextInput
            mode="flat"
            onChangeText={setSprayMixNeeded}
            value={sprayMixNeeded.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please input the dispense rate of the fogger machine in mL per minute</Text>
            <TextInput
            mode="flat"
            onChangeText={setRateOfDispense}
            value={rateOfDispense.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Button 
            title='Calculate Time Required'
            onPress={() => {calculate(sprayMixNeeded,rateOfDispense);showDialog()}}
            />


            <Portal>
                <DialogComponent title="Calculation Results" paragraph={isEmpty() ? "None of the values can be 0. Please input valid values." :`It will take a total of ${timeRequired} minutes to spray ${sprayMixNeeded}ml at a rate of ${rateOfDispense}mL per minute`} visible={visible} hideDialog={hideDialog} />
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



export default FlowrateComponent
