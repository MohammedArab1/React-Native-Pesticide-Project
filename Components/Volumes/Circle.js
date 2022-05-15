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
            value={radius.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Circle Area'
            onPress={() => {calculate(radius)}}
            />

            <View style={[styles.space]}></View>
            {volume > 0 && <Text style = {[styles.answer]}>The total area of your circle is: {volume} metres</Text>}

            <View style={[styles.space]}></View>
            <Image style={[styles.image]} source={require('../images/circle-with-titles.png')}/>

        </ScrollView>
    )
}


export default Circle
