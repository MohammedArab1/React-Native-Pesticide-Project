import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";

const Silo = () => {
    const calculate = (radius, height) => {
        setVolume((3.14159265*radius*radius*height))
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [height, setHeight] = React.useState(0);


    return (
        <ScrollView>
            <Text>Please enter the radius of the silo you are working with in meters </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setRadius}
            value={radius}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the silo you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeight}
            value={height}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Silo Volume'
            onPress={() => {calculate(radius,height)}}
            />

            {volume > 0 && <Text>The total volume of your silo is: {volume} metres</Text>}

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

export default Silo
