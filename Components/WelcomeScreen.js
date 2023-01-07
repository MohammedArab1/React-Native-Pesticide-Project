import React from 'react'
import {View,SafeAreaView, StyleSheet} from "react-native";
import {styles} from "../Styles"
import { Text, Portal, FAB} from 'react-native-paper';
import DialogComponent from "../Components/DialogComponent"


const WelcomeScreen = () => {

    const [fabDialogVisible,  setFabDialogVisible] = React.useState(false)

    const showFabDialog = () => setFabDialogVisible(true);
    const hideFabDialog = () => setFabDialogVisible(false);

    const purpose = "This app is meant to be a simple pocket calculator for those who are in the pesticide business."
    const howToUse = "To use this app, swipe left and pick one of the tabs based on which calculation you'd like to carry out."
    return (
        <Portal.Host>
            <View style={styles.format}>
                <SafeAreaView>
                <Text style={styles.container} variant="displayLarge">Welcome!</Text>
                <View style={styles.space}></View>
                <Text style={styles.container} variant="headlineLarge">{purpose}</Text>

                <Portal>
                    <DialogComponent title="Help" paragraph={howToUse} visible={fabDialogVisible} hideDialog={hideFabDialog} />
                    <FAB
                    icon="help"
                    style={styles.fab}
                    onPress={() => showFabDialog()}
                    />
                </Portal>
                
                </SafeAreaView>
            </View>
        </Portal.Host>
        

    )
}

const localStyles = StyleSheet.create({
    centered: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      marginVertical: 2,
    },
    subtitle: {
      fontSize: 14,
      color: "#888",
    },
  });


export default WelcomeScreen
