import React, {useEffect} from 'react'
import {ScrollView, View } from "react-native";
import {styles} from "../Styles"
import {Text, TextInput, Portal, FAB} from 'react-native-paper';
import DialogComponent from './DialogComponent';
import Button from './Button';

    const RatioComponent = () => {


        const [c1, setC1] = React.useState(0)
        const [v1, setV1] = React.useState(0)
        const [v2, setV2] = React.useState(0)
        const [v3, setV3] = React.useState(0)
        const [c2, setC2] = React.useState(0)
        const [visible, setVisible] = React.useState(false)
        const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)
    
        const showDialog = () => setVisible(true);
        const hideDialog = () => setVisible(false);
    
        const showFabDialog = () => setFabDialogVisible(true);
        const hideFabDialog = () => setFabDialogVisible(false);

        const calculate = (c1,v1,v2) => {
            setC2((c1 / v1) * v2);
        }

        const  isEmpty = () => {
            if (c1==0 || v1 ==0 || v2==0) {
                return true
            }
            return false
        }

        useEffect(() => {
            setV3(v2-c2);
        }, [c2])

        const fabHelp = "Ratios can be used in pesticide work when given instructions on how much pesticide to mix with water and you want to figure out how much concentrate to mix with water."


    return (

        <Portal.Host>
        <ScrollView style={styles.format}>

            <Text>Please enter how much pesticide you are told to mix with water (if given in parts, please give the number of parts)</Text>
            <TextInput
            mode="flat"
            onChangeText={setC1}
            value={c1.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter how much water (in mL) you are told to mix with the pesticide (if given in parts, please give the number of parts)</Text>
            <TextInput
            mode="flat"
            onChangeText={setV1}
            value={v1.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Text>Please enter how much spray mix (in mL) you want to make in total</Text>
            <TextInput
            mode="flat"
            onChangeText={setV2}
            value={v2.toString()}
            keyboardType='numeric'
            />
            <View style={styles.space}></View>
            <Button 
            title='Calculate Ratio'
            onPress={() => {calculate(c1,v1,v2);showDialog()}}
            />
            
            <Portal>
                <DialogComponent title="Calculation Results" paragraph={isEmpty() ? "None of the values can be 0. Please input valid values." :`You need to mix a total of ${c2}mL of concentrate with ${v3}mL of water to acquire a total spray mix volume ${v2}mL`} visible={visible} hideDialog={hideDialog} />
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



export default RatioComponent
