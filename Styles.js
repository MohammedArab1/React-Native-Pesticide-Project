import { StyleSheet } from 'react-native';
import config from './config'

const styles = StyleSheet.create({
    mainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'darkgreen',
    },
    text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    },
    image: {
    width:'30%',
    height:'30%',
    marginLeft:'35%',
    alignContent:'center',
    resizeMode:'contain',
    },
    format: {
    paddingLeft: config.deviceWidth * 0.1,
    paddingTop: config.deviceWidth * 0.1,
    paddingBottom: config.deviceWidth * 0.1,
    paddingRight: config.deviceWidth * 0.1,
    },
    
});

export { styles }