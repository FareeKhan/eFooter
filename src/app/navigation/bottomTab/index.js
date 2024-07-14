import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DropShadow from 'react-native-drop-shadow';
import icons from '../../assets/icons';
import {
  HomeScreen,
  DashboardScreen,
  GameScreen,
  TournamentScreen,
  // ChatScreen,
} from '../../screens';
import ChatNavigator from '../chat';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#261D37',
          height: 90,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 2,
          borderColor: '#3B3EFF',
          borderLeftWidth: 2,
          borderRightWidth: 2,
          marginLeft: -3,
          marginRight: -3,
          position: 'absolute',
        },
        tabBarHideOnKeyboard: 'true',
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: 5,
                  backgroundColor: '#3B3EFF',
                  borderRadius: 15,
                }}>
                <icons.HomeIconA />
              </View>
            ) : (
              <icons.HomeIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#3B3EFF',
                  borderRadius: 15,
                }}>
                <icons.DashboardIconA />
              </View>
            ) : (
              <icons.DashboardIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <DropShadow
              style={{
                shadowColor: '#3B3EFF',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 90,
                  height: 90,
                  backgroundColor: '#261D37',
                  marginBottom: 40,
                  borderRadius: 50,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    backgroundColor: '#3B3EFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <icons.GameWhiteFillIcon /> : <icons.GameIcon />}
                </View>
              </View>
            </DropShadow>
          ),
        }}
      />
      <Tab.Screen
        name="TournamentScreen"
        component={TournamentScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#3B3EFF',
                  borderRadius: 15,
                }}>
                <icons.TournamentIconA />
              </View>
            ) : (
              <icons.TournamentIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#3B3EFF',
                  borderRadius: 15,
                }}>
                <icons.ChatIconA />
              </View>
            ) : (
              <icons.ChatIconNA />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
