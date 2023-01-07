import { StyleSheet } from 'react-native';
import { round } from 'react-native-reanimated';
import config from './config'

const styles = StyleSheet.create({
    mainButton: noWidth => ({
        width: noWidth? "25%" : "45%",
        height:30,
        backgroundColor: "#CBC3E3",
        borderRadius: 10,
        fontSize:5,
    }),
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
        },
        input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    mainTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
    secondaryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'orange',
        width:'70%',
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        // margin:10
        // alignSelf: 'center',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // flex:1
    },
    format: {
        paddingLeft: config.deviceWidth * 0.1,
        paddingTop: config.deviceWidth * 0.1,
        paddingBottom: config.deviceWidth * 0.1,
        paddingRight: config.deviceWidth * 0.1,
    },
    answer: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    fab: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: 'transparent',                                    
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10, 
    },
    singleRow: { 
        flexDirection: "row" ,
    },
    buttonOuterLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export { styles }