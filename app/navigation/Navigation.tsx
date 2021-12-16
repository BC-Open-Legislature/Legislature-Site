import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MLAScreen from '../screens/MLA';
import MemberScreen from '../screens/Member';
import DebatesScreen from '../screens/Debates';

const Stack = createNativeStackNavigator();

export default function Navigator () {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="MLAs" 
            screenOptions={{headerShown: false}}
        >
          <Stack.Screen
              name="MLAs"
              component={ MLAScreen }
          />
          <Stack.Screen
              name="MLAs/Member"
              component={ MemberScreen }
          />
          <Stack.Screen
              name="Debates"
              component={ DebatesScreen }
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}