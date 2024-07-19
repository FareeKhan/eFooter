import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IndividualChatScreen,
  SplashScreen,
  GlobalChatScreen,
} from '../../screens';
import AuthNavigator from '../auth';
import {DrawerNavigation} from '../drawer';

export const Stack = createNativeStackNavigator();

export const commonHeaderOptions = {headerShown: false};

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name={'Splash'}
        component={SplashScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Auth'}
        component={AuthNavigator}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'IndividualChat'}
        component={IndividualChatScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'GlobalChat'}
        component={GlobalChatScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Drawer'}
        component={DrawerNavigation}
        options={commonHeaderOptions}
      />
    </Stack.Navigator>
  );
}
