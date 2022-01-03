import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";



const SecondCalc = () => {
    const [price, setPrice] = React.useState(0)
    const [tax, setTax] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    return (
        <SafeAreaView>

            <Text>Your total price is: {parseFloat(total)}</Text>
            <Text> Please input Price</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setPrice}
            value={price}
            keyboardType='numeric'
            />

            <Text> Please input Sales Tax</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setTax}
            placeholder='ex. 5%'
            keyboardType='numeric'
            value={tax}
            />

            <Button 
            title='Calculate total price'
            onPress={() => (setTotal( parseFloat(price) + parseFloat(price*(tax/100))))}
            />




        </SafeAreaView>
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

export default SecondCalc
