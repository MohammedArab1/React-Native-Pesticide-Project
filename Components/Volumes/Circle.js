import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'

const Circle = () => {
    const calculate = (radius) => {
        setVolume((3.14159265*radius*radius))
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);


    return (
        <ScrollView style={styles.format}>
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


export default Circle
