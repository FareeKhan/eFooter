import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactUsScreen } from '../../screens';

const Stack = createStackNavigator();

export const MyContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
