import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'

const Triangle = () => {

    const calculate = (length, height) => {
        setVolume((length*height) / 2)
    }

    const [length, setLength] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [volume, setVolume] = React.useState(0);

    return (
        <ScrollView>
            <View style={styles.format}>
            <Text>Please enter the length of the base of the triangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the triangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeight}
            value={height.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Triangle Area'
            onPress={() => {calculate(length,height)}}
            />

            <View style={[styles.space]}></View>
            {volume > 0 && <Text style={[styles.answer]}>The total area of the triangle is: {volume} metres</Text>}
            </View>

            <Image style={[styles.image, styles.format]} source={require('../images/triangle-with-titles.png')}/>

        </ScrollView>
    )
}



export default Triangle
