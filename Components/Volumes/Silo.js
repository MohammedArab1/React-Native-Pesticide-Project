import React from 'react'
import { Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'
import {Text, Portal, TextInput,} from 'react-native-paper';
import DialogComponent from '../DialogComponent';
const Silo = () => {
    const calculate = (radius, height) => {
        setVolume((3.14159265*radius*radius*height).toString()+" m³")
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    return (
        <ScrollView style={styles.format}>
            <Text>Please enter the radius of the silo you are working with in meters </Text>
            <TextInput
            mode="flat"
            onChangeText={setRadius}
            value={radius.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the silo you are working with in meters</Text>
            <TextInput
            mode="flat"
            onChangeText={setHeight}
            value={height.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Silo Volume'
            onPress={() => {calculate(radius,height);showFabDialog()}}
            />

            <View style={[styles.space]}></View>
            <Image style={[styles.image]} source={require('../images/silo-with-titles.png')}/>

            <Portal>
                <DialogComponent title="Calculation Results" paragraph={"Result: " + volume } visible={fabDialogVisible} hideDialog={hideFabDialog} />
            </Portal>
        </ScrollView>
    )
}


export default Silo
