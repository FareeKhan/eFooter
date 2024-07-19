import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProfileScreen } from '../../screens';

const Stack = createStackNavigator();

export const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
