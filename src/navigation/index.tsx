import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screen from '@/screens';

const Stack = createStackNavigator();
const options = {headerShown: false, gestureEnabled: false};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="SignIn" component={screen.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
