import React from 'react'
import { Dialog, Paragraph} from "react-native-paper";
import Button from "../Components/Button"


const DialogComponent = ({title,paragraph,visible,hideDialog}) => {
    return (
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
            <Paragraph>{paragraph}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={hideDialog}  title='Okay'></Button>
        </Dialog.Actions>
        </Dialog>
    )
}

export default DialogComponent
