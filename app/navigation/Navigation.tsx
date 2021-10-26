import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MLAScreen from '../screens/MLA/MLAScreen';

const Stack = createNativeStackNavigator();

export default function Navigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="MLA" 
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name="MLA"
                    component={MLAScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}