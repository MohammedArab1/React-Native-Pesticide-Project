import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'

const Silo = () => {
    const calculate = (radius, height) => {
        setVolume((3.14159265*radius*radius*height))
    }

    const [radius, setRadius] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [height, setHeight] = React.useState(0);


    return (
        <ScrollView style={styles.format}>
            <Text>Please enter the radius of the silo you are working with in meters </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setRadius}
            value={radius.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the silo you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeight}
            value={height.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Silo Volume'
            onPress={() => {calculate(radius,height)}}
            />

            <View style={[styles.space]}></View>
            {volume > 0 && <Text style={[styles.answer]}>The total volume of your silo is: {volume.toFixed(2)} metres</Text>}

            <View style={[styles.space]}></View>
            <Image style={[styles.image]} source={require('../images/silo-with-titles.png')}/>

        </ScrollView>
    )
}


export default Silo
