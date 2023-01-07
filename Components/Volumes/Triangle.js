import React from 'react'
import { Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'
import {Text, Portal, TextInput,} from 'react-native-paper';
import DialogComponent from '../DialogComponent';
const Triangle = () => {

    const calculate = (length, height) => {
        setVolume(((length*height) / 2).toString() + " m²")
    }

    const [length, setLength] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);
    return (
        <ScrollView>
            <View style={styles.format}>
            <Text>Please enter the length of the base of the triangle you are working with in meters</Text>
            <TextInput
            mode="flat"
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter the height of the triangle you are working with in meters</Text>
            <TextInput
            mode="flat" 
            onChangeText={setHeight}
            value={height.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Triangle Area'
            onPress={() => {calculate(length,height); showFabDialog()}}
            />

            </View>

            <Image style={[styles.image, styles.format]} source={require('../images/triangle-with-titles.png')}/>

            <Portal>
                <DialogComponent title="Calculation Results" paragraph={"Result: " + volume} visible={fabDialogVisible} hideDialog={hideFabDialog} />
            </Portal>
        </ScrollView>
    )
}



export default Triangle
