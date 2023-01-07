import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import DilutionComponent from './DilutionComponent'
import RatioComponent from './RatioComponent'
import VolumeComponent from './VolumeComponent'
import DosageComponent from './DosageComponent'
import FlowrateComponent from './FlowrateComponent'
import WelcomeScreen from './WelcomeScreen';


const Drawer = createDrawerNavigator();
const LeftDrawer = (props) => {
    return (
        <Drawer.Navigator useLegacyImplementation={false}>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Dilution" component={DilutionComponent} />
            <Drawer.Screen name="Volume" component={VolumeComponent}/>
            <Drawer.Screen name="Ratio" component={RatioComponent} />
            <Drawer.Screen name="Dosage" component={DosageComponent} />
            <Drawer.Screen name="Flowrate" component={FlowrateComponent} />
        </Drawer.Navigator>
    )
}

export default LeftDrawer
