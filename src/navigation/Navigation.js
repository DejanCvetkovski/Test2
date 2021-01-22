import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/firstScreen/screen';
import SecondScreen from '../screens/secondScreen/screen';
import TeslaOne from '../screens/teslaScreenOne/screenOne';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TeslaOne"
          component={TeslaOne}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
