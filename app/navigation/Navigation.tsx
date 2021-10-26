import * as React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MLAScreen from '../screens/MLA';
import MemberScreen from '../screens/Member';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colours } from '../style';

const Stack = createNativeStackNavigator();

export default function Navigator () {
    return (
        <View style={ styles.container }>
            <StatusBar style='auto' />
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="MLA" 
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen
                        name="MLA"
                        component={ MLAScreen }
                    />
                    <Stack.Screen
                        name="Member"
                        component={ MemberScreen }
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
            <TopBar selected={ 'MLAs' } ></TopBar>
            <BottomBar></BottomBar>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.Secondary[100],
    height: '100%',
    width: '100%',
  },
});
  