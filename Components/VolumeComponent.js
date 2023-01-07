import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, SafeAreaView } from 'react-native'
import {Text, Portal, FAB} from 'react-native-paper';
import {styles} from "../Styles"
import Button from './Button'
import DialogComponent from './DialogComponent';


const VolumeComponent = ({navigation}) => {
    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);
    
    const fabHelp ="Volume can be used in pesticide work to find out how much necessary pesticide is required for a particular area. Please choose the shape of the building you are trying to find the volume for."
    return (
        <Portal.Host>
        <SafeAreaView style={styles.container}>

                <Text variant="headlineSmall" style={styles.format}>
                    Pick a shape for which you'd like to calculate the volume.
                </Text>

                <View style={styles.space}></View>

                <Button 
                    title='Square / rectangle Area Calculation'
                    onPress = {() => {  navigation.navigate('Square')  }}
                    style={styles.secondaryButton}
                
                />

                <View style={styles.space}></View>

                <Button 
                    title='Triangle Area Calculation'
                    onPress = {() => { navigation.navigate('Triangle')  }}
                    style={styles.secondaryButton}
                />
                <View style={styles.space}></View>

                <Button 
                    title='Cube / cubic rectangle Volume Calculation'
                    onPress = {() => {navigation.navigate('Cube')  }}
                    style={styles.secondaryButton}
                />


                <View style={styles.space}></View>

                <Button 
                    title='Building With Peak Volume Calculation'
                    onPress = {() => {navigation.navigate('Peak')  }}
                    style={styles.secondaryButton}
                />

                <View style={styles.space}></View>       

                <Button 
                    title='Circle Area Calculation'
                    onPress = {() => {navigation.navigate('Circle')   }}
                    style={styles.secondaryButton}
                />

                <View style={styles.space}></View>

                <Button 
                    title='Silo Volume Calculation'
                    onPress = {() => {navigation.navigate('Silo')  }}
                    style={styles.secondaryButton}
                />

                <View style={styles.space}></View>

            <Portal>
                <DialogComponent title="Help" paragraph={fabHelp} visible={fabDialogVisible} hideDialog={hideFabDialog} />
                <FAB
                icon="help"
                style={styles.fab}
                onPress={() => showFabDialog()}
                />
            </Portal>
        </SafeAreaView>
        </Portal.Host>
    )
}

export default VolumeComponent
