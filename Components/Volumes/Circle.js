import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";

const Circle = () => {
    const calculate = (radius) => {
        setVolume((3.14159265*radius*radius))
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);


    return (
        <ScrollView>
            <Text>Please enter the radius of the circle you are working with in meters </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setRadius}
            value={radius}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Circle Area'
            onPress={() => {calculate(radius)}}
            />

            {volume > 0 && <Text>The total area of your circle is: {volume} metres</Text>}

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

export default Circle
