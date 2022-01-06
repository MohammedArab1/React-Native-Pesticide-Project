import React from 'react'
import {Text, Pressable } from "react-native";
import {styles} from "../Styles"

const Button = (props) => {
    return (
    <Pressable style={props.style} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
    )
}

export default Button
