import React from  'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidentes';
import Detail from './pages/Details';
import IncidentVideo from './pages/IncidentVideo';


export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions = {{headerShown: false}} >
                <AppStack.Screen name = 'Incidents' component = {Incidents}/>
                <AppStack.Screen name = 'Detail' component = {Detail}/>
                <AppStack.Screen name = 'IncidentVideo' component = {IncidentVideo}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}