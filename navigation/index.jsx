import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import WellcomeScreen from '../screens/WellcomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();



export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Wellcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Wellcome" component={WellcomeScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}