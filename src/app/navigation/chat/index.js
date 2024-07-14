import React from 'react';
import {
  ChatScreen,
  ChallengeInviteScreen,
  ChallengeRequestScreen,
  IndividualChatScreen,
  GlobalChatScreen,
} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Chat = createNativeStackNavigator();

const ChatNavigator = ({}) => (
  <>
    <Chat.Navigator initialRouteName={'ChatScreen'}>
      <Chat.Screen
        name={'ChatScreen'}
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Chat.Screen
        name={'IndividualChat'}
        component={IndividualChatScreen}
        options={{headerShown: false}}
      />
      <Chat.Screen
        name={'GlobalChat'}
        component={GlobalChatScreen}
        options={{headerShown: false}}
      />
      <Chat.Screen
        name={'ChallengeInvite'}
        component={ChallengeInviteScreen}
        options={{headerShown: false}}
      />
      <Chat.Screen
        name={'ChallengeRequest'}
        component={ChallengeRequestScreen}
        options={{headerShown: false}}
      />
    </Chat.Navigator>
  </>
);

export default ChatNavigator;
