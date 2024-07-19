import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyMatchesScreen } from '../../screens';

const Stack = createStackNavigator();

export const MyMatchesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyMatches"
        component={MyMatchesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
