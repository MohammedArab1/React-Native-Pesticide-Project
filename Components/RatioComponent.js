import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";




    const RatioComponent = () => {


        const [c1, setC1] = React.useState(0)
        const [v1, setV1] = React.useState(0)
        const [v2, setV2] = React.useState(0)
        const [v3, setV3] = React.useState(0)
        const [c2, setC2] = React.useState(0)

        const calculate = (c1,v1,v2) => {
            setC2((c1 / v1) * v2);
        }

        useEffect(() => {
            setV3(v2-c2);
        }, [c2])



    return (

    
        <ScrollView>
            <Text>
            Ratios can be used in pesticide work when given instructions on how much pesticide to mix with water and you want to figure out how much concentrate to mix with water.
            let us start
            </Text>

            <Text>Please enter how much pesticide you are told to mix with water (if given in parts, please give the number of parts)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setC1}
            value={c1}
            keyboardType='numeric'
            />

            <Text>Please enter how much water (in mL) you are told to mix with the pesticide (if given in parts, please give the number of parts)</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setV1}
            value={v1}
            keyboardType='numeric'
            />

            <Text>Please enter how much spray mix (in mL) you want to make in total</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setV2}
            value={v2}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Ratio'
            onPress={() => {calculate(c1,v1,v2)}}
            />

            {c2 > 0 && <Text>You need to mix a total of {c2}mL of concentrate with {v3}mL of water to acquire a total spray mix volume {v2}mL</Text>}
            


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
});

export default RatioComponent
