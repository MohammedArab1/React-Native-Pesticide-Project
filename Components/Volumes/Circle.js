import React from 'react'
import { Button, ScrollView, Image } from "react-native";
import {styles} from '../../Styles'
import {Text, Portal, TextInput,} from 'react-native-paper';
import DialogComponent from '../DialogComponent';

const Circle = () => {
    const calculate = (radius) => {
        setVolume((3.14159265*radius*radius).toString() + " m²")
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    return (
        <ScrollView style={styles.format}>
            <Text>Please enter the radius of the circle you are working with in meters </Text>
            <TextInput
            mode="flat"            onChangeText={setRadius}
            value={radius.toString()}
            keyboardType='numeric'
            />
            <Button 
            title='Calculate Circle Area'
            onPress={() => {calculate(radius);showFabDialog()}}
            />
            <Image style={[styles.image]} source={require('../images/circle-with-titles.png')}/>

            <Portal>
                <DialogComponent title="Calculation Results" paragraph={"Result: " + volume } visible={fabDialogVisible} hideDialog={hideFabDialog} />
            </Portal>

        </ScrollView>
    )
}


export default Circle
