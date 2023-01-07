import React from 'react'
import {Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'
import {Text, Portal, TextInput,} from 'react-native-paper';
import DialogComponent from '../DialogComponent';



const Square = () => {

    
    const calculate = (length, width) => {
        setVolume((length*width).toString() + " m²")
    }

    const [length, setLength] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);
    return (
        <ScrollView> 
            <View style={styles.format}>
            <Text>Please enter the length of the square / rectangle you are working with in meters</Text>
            <TextInput
            mode="flat"
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter the width of the square / rectangle you are working with in meters</Text>
            <TextInput
            mode="flat"
            onChangeText={setWidth}
            value={width.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Square Area'
            onPress={() => {
                calculate(length,width)
                showFabDialog()
                }
            }
            />
            
            </View>

            <Image style={[styles.image, styles.format]} source={require('../images/square-with-titles.png')}/>
            <Portal>
                <DialogComponent title="Calculation Results" paragraph={"Result: " + volume} visible={fabDialogVisible} hideDialog={hideFabDialog} />
            </Portal>
        </ScrollView>
    )
}



export default Square
