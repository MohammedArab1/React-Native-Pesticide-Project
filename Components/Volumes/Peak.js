import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView, Image,View } from "react-native";
import {styles} from '../../Styles'

const Peak = () => {
    const calculate = (length, width, heightTotal, heightNoPeak) => {
        let v1 = (length*width*heightNoPeak)
        let v2 = ((length*width*(heightTotal-heightNoPeak)) / 2)
        setVolume(v1+v2)
    }

    const [length, setLength] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [heightTotal, setHeightTotal] = React.useState(0);
    const [heightNoPeak, setHeightNoPeak] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    

    return (
        <ScrollView >
            <View style={styles.format}>
            <Text>Please enter the length of the building with the peaked roof in meters </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setLength}
            value={length.toString()}
            keyboardType='numeric'
            />


            <Text>Please enter the width of the building with the peaked roof in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setWidth}
            value={width.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the building with the peaked roof in meters (H1) </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeightTotal}
            value={heightTotal.toString()}
            keyboardType='numeric'
            />

            <Text>Please enter the height from the ground to the end of the wall (before the peak) in meters (H2) </Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeightNoPeak}
            value={heightNoPeak.toString()}
            keyboardType='numeric'
            />

            {
            (parseFloat(heightNoPeak) >= parseFloat(heightTotal)) ? 
                <Text style={[styles.answer]}>
                    It is not possible for the height from the ground to the end of the wall before the peak to be greater than or equal to height until the end of the building! 
                    Please input a new value for the height to the end of the wall before the peak 
                </Text>
            : <Button 
            title='Calculate Peak Volume'
            onPress={() => {calculate(length,width, heightTotal,heightNoPeak)}}
            />
            }


            <View style={[styles.space]}></View>
            {volume > 0 && <Text style={[styles.answer]}>The total volume of your Peaked building is: {volume} metres</Text>}
            </View>

            <Image style={[styles.image]} source={require('../images/peak-with-titles.png')}/>


        </ScrollView>
    )
}


export default Peak
