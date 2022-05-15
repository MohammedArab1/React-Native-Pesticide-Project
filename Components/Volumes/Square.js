import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'



const Square = () => {

    const calculate = (length, width) => {
        setVolume(length*width)
    }

    const [length, setLength] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [volume, setVolume] = React.useState(0);

    return (
        <ScrollView> 
            <View style={styles.format}>
            <Text>Please enter the length of the square / rectangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the width of the square / rectangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setWidth}
            value={width.toString()}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Square Area'
            onPress={() => {calculate(length,width)}}
            />

            <View style={[styles.space]}></View>
            {volume > 0 && <Text style={[styles.answer]}>The total area of the square is: {volume} metres</Text>}
            
            </View>


            <Image style={[styles.image, styles.format]} source={require('../images/square-with-titles.png')}/>

        </ScrollView>
    )
}



export default Square
