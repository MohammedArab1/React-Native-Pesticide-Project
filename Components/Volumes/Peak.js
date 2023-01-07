import React from 'react'
import {Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'
import {Text, Portal, TextInput,} from 'react-native-paper';
import DialogComponent from '../DialogComponent';

const Peak = () => {
    const calculate = (length, width, heightTotal, heightNoPeak) => {
        let v1 = (length*width*heightNoPeak)
        let v2 = ((length*width*(heightTotal-heightNoPeak)) / 2)
        setVolume((v1+v2).toString() + " m³" )
    }

    const [length, setLength] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [heightTotal, setHeightTotal] = React.useState(0);
    const [heightNoPeak, setHeightNoPeak] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    const calculationNotPossible = "It is not possible for the height from the ground to the end of the wall before the peak to be greater than or equal to height until the end of the building! Please input a new value for the height to the end of the wall before the peak "

    return (
        <ScrollView >
            <View style={styles.format}>
            <Text>Please enter the length of the building with the peaked roof in meters </Text>
            <TextInput
            mode = "flat"
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter the width of the building with the peaked roof in meters</Text>
            <TextInput
            mode = "flat"
            onChangeText={setWidth}
            value={width.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter the height of the building with the peaked roof in meters (H1) </Text>
            <TextInput
            mode = "flat"
            onChangeText={setHeightTotal}
            value={heightTotal.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter the height from the ground to the end of the wall (before the peak) in meters (H2) </Text>
            <TextInput
            mode = "flat"
            onChangeText={setHeightNoPeak}
            value={heightNoPeak.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Peak Volume'
            onPress={() => {calculate(length,width, heightTotal,heightNoPeak); showFabDialog()}}
            />
            

            </View>
                <Image style={[styles.image]} source={require('../images/peak-with-titles.png')}/>
            <Portal>
                <DialogComponent title="Calculation Results" paragraph={ (parseFloat(heightNoPeak) >= parseFloat(heightTotal)) ? calculationNotPossible :"Result: " + volume } visible={fabDialogVisible} hideDialog={hideFabDialog} />
            </Portal>

        </ScrollView>
    )
}


export default Peak
