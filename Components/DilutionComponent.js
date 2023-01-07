import React from 'react'
import { ScrollView, View,SafeAreaView} from "react-native";
import {styles} from "../Styles"
import { TextInput, Text, Portal, FAB} from 'react-native-paper';
import Button from "../Components/Button"
import DialogComponent from "../Components/DialogComponent"
import DropDown from 'react-native-paper-dropdown';
import SelectDropdown from 'react-native-select-dropdown'





const DilutionComponent = () => {

    const [c1, setC1] = React.useState(0)
    const [v1, setV1] = React.useState(0)
    const [c2, setC2] = React.useState(0)
    const [v2, setV2] = React.useState(0)
    const [total, setTotal] = React.useState("")
    const [visible, setVisible] = React.useState(false)
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    const calculate = (c1,v1,c2,v2) => {
        let l = [c1,v1,c2,v2]
        let i = 0
        let n = 0
    
        while (i<l.length) {
            if (l[i] === 0) {
                n += 1
            }
            i += 1
        }
        if (n >= 2) {
            setTotal("A maximum of one missing value can be used to perform a dilution calculation. Perhaps a ratio calculation is more suitable")
        }
        else if (c1 != 0 && c2 != 0 && v1 != 0 && v2 != 0) {
            setTotal("There has to be one value missing in order to perform a dilution calculation!")
        }
        else if (c1 == 0) {
            setTotal(((c2 * v2) / v1).toString() + "%")
        }
        else if (v1 == 0) {
            setTotal(((c2 * v2) / c1).toString() + " mL")
        }
        else if (c2 == 0) {
            setTotal(((c1 * v1) / v2).toString() + "%")
        }
        else {
            setTotal(((c1 * v1) / c2).toString() + " mL" )
        }
        
    } 

    const whatIsDilution = `A dilution is when you decrease the concentration of solute in solution. This can be applied in insecticide work to make large batches of spray mix from small but very concentrated bottles of pesticide. In order to perform a dilution, exactly one missing value must be present.`

    return (
        <Portal.Host>
        <ScrollView style={styles.format}>
            <SafeAreaView>

            <View>
            <Text> Please enter the percent concentration of the concentrate (if unknown , please put 0)</Text>
            <TextInput
            onChangeText={setC1}
            value={c1.toString()}
            keyboardType='numeric'
            mode="flat"
            />
            </View>
            <View style={styles.space}></View>


            <Text> Please input the volume of concentrate used in mL (if unknown , please put 0)</Text>
            <TextInput
            onChangeText={setV1}
            value={v1.toString()}
            keyboardType='numeric'
            mode="flat"
            />
            <View style={styles.space}></View>
            <Text> Please enter the final percent concentration of the spray mix that you'd like to make (if unknown , please put 0) </Text>
            <TextInput
            onChangeText={setC2}
            value={c2.toString()}
            keyboardType='numeric'
            mode="flat"
            />
            <View style={styles.space}></View>
            <Text> Please enter the total volume that you'd like to make in mL (if unknown , please put 0)</Text>
            <TextInput
            onChangeText={setV2}
            value={v2.toString()}
            keyboardType='numeric'
            mode="flat"
            />
            <View style={styles.space}></View>
            <View style={[styles.space]}></View>
            <Button 
            title='Calculate Dilution'
            onPress={() => {
                calculate(c1,v1,c2,v2)
                showDialog()
                }
            }
            />

            <Portal>
                <DialogComponent title="Calculation Results" paragraph={"Result: " + total} visible={visible} hideDialog={hideDialog} />
                <DialogComponent title="Help" paragraph={whatIsDilution} visible={fabDialogVisible} hideDialog={hideFabDialog} />
                <FAB
                icon="help"
                style={styles.fab}
                onPress={() => showFabDialog()}
                />
            </Portal>
            
            </SafeAreaView>
        </ScrollView>
        </Portal.Host>
        

    )
}



export default DilutionComponent
