import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Button, ScrollView } from "react-native";

const Cube = () => {
    const calculate = (length, width, height) => {
        setVolume((length*width*height))
    }

    const [length, setLength] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [volume, setVolume] = React.useState(0);
    const [height, setHeight] = React.useState(0);


    return (
        <ScrollView>
            <Text>Please enter the length of the cube / cubic rectangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setLength}
            value={length}
            keyboardType='numeric'
            />


            <Text>Please enter the width of the cube / cubic rectangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setWidth}
            value={width}
            keyboardType='numeric'
            />

            <Text>Please enter the height of the cube / cubic rectangle you are working with in meters</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeight}
            value={height}
            keyboardType='numeric'
            />

            <Button 
            title='Calculate Cube Volume'
            onPress={() => {calculate(length,width,height)}}
            />

            {volume > 0 && <Text>The total volume of your cube / cubic rectangle is: {volume} metres</Text>}

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
export default Cube
