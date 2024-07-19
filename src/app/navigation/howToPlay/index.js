import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HowToPlayScreen } from '../../screens';

const Stack = createStackNavigator();

export const HowToPlayStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HowToPlay"
        component={HowToPlayScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
