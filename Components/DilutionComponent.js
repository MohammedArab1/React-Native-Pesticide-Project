import React, {useState} from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";
import {styles} from "../Styles"





const DilutionComponent = () => {

    const [c1, setC1] = React.useState(0)
    const [v1, setV1] = React.useState(0)
    const [c2, setC2] = React.useState(0)
    const [v2, setV2] = React.useState(0)
    const [total, setTotal] = React.useState(0)



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
            setTotal((c2 * v2) / v1)
        }
        else if (v1 == 0) {
            setTotal((c2 * v2) / c1)
        }
        else if (c2 == 0) {
            setTotal((c1 * v1) / v2)
        }
        else {
            setTotal((c1 * v1) / c2 )
        }
        
    } 



    return (
        <ScrollView>
            <SafeAreaView>
            <Text>
            A dilution is when you decrease the concentration of solute in solution.
            This can be applied in insecticide work to make large batches of spray mix from small very concentrated bottles of pesticide.
            In order to perform a dilution, exactly one missing value mus be present. Let us start
            </Text>
            <View style={styles.space}></View>
            <Text> Please enter the percent concentration of the concentrate (if unknown , please put 0)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setC1}
            value={c1}
            keyboardType='numeric'
            />

            <Text> Please input the volume of concentrate used in mL (if unknown , please put 0)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setV1}
            value={v1}
            keyboardType='numeric'
            />

            <Text> Please enter the final percent concentration of the spray mix that you'd like to make (if unknown , please put 0) </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setC2}
            value={c2}
            keyboardType='numeric'
            />

            <Text> Please enter the total volume that you'd like to make in mL (if unknown , please put 0)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setV2}
            value={v2}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Dilution'
            onPress={() => calculate(c1,v1,c2,v2)}
            /> 

            
            <Text>Result: {total}</Text>
            </SafeAreaView>
        </ScrollView>
    )
}



export default DilutionComponent
