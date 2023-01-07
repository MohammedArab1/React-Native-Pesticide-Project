import React from 'react'
import {Text} from "react-native";
import { Button as PaperButton } from "react-native-paper";


const Button = (props) => {
    return (
    <PaperButton onPress={props.onPress} mode={"contained-tonal"}>
        <Text>{props.title}</Text>
    </PaperButton>
    )
}

export default Button
