import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../../../assets/icons';
import {styles} from './IndividualChat.style';

const IndividualChat = () => {
  const navigation = useNavigation();

  const messages = [
    {
      id: '1',
      type: 'sender',
      text: 'Draw a line in the sand drop-dead a date. Thanks Proceduralize weaponize the data ',
      avatar: require('../../../../assets/images/pngs/usersProfile/1.png'),
      time: '6:27 PM',
    },
    {
      id: '2',
      type: 'receiver',
      text: 'Draw a line in the sand drop-dead date. And to Proceduralije weaponize their  data yet ping me. Draw a line in whole',
      avatar: require('../../../../assets/images/pngs/usersProfile/3.png'),
      time: '10:27 PM',
    },
    {
      id: '3',
      type: 'sender',
      text: 'Great! Thanks.',
      avatar: require('../../../../assets/images/pngs/usersProfile/1.png'),
      time: '6:27 AM',
    },
    {
      id: '4',
      type: 'receiver',
      text: 'Its my pleasure!',
      avatar: require('../../../../assets/images/pngs/usersProfile/3.png'),
      time: '8:27 PM',
    },
    {
      id: '5',
      type: 'receiver',
      text: 'Draw a line in the sand drop-dead date. And to Proceduralije weaponize their  data yet ping me. Draw a line in whole',
      avatar: require('../../../../assets/images/pngs/usersProfile/3.png'),
      time: '11:27 PM',
    },
    {
      id: '6',
      type: 'sender',
      text: 'Great! Thanks.',
      avatar: require('../../../../assets/images/pngs/usersProfile/1.png'),
      time: '12:27 AM',
    },
    {
      id: '',
      type: 'receiver',
      text: 'Its my pleasure!',
      avatar: require('../../../../assets/images/pngs/usersProfile/3.png'),
      time: '9:27 PM',
    },
  ];

  return (
    <SafeAreaView  style={styles.safeArea}>
      <View   style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.RightArrowIcon />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <View>
              <Image
                source={require('../../../../assets/images/pngs/usersProfile/3.png')}
                style={styles.userAvatar}
                resizeMode="cover"
              />
              <View style={styles.onlineIndicatorContainer}>
                <View style={styles.onlineIndicator} />
              </View>
            </View>
            <View>
              <Text style={styles.userName}>Jenny Wilson</Text>
              <Text style={styles.userStatus}>Online</Text>
            </View>
          </View>
        </View>
        <Icons.DotsIcon />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.msgsContainer}>
          <FlatList
            data={messages}
            contentContainerStyle={{gap: 20}}
            renderItem={({item}) => (
              <View
                style={[
                  styles.msgContainer,
                  {
                    flexDirection:
                      item.type === 'sender' ? 'row' : 'row-reverse',
                  },
                ]}>
                <View>
                  <Image
                    source={item.avatar}
                    style={styles.msgerAvatar}
                    resizeMode="cover"
                  />
                  <View style={styles.onlineIndicatorContainer}>
                    <View style={styles.onlineIndicator} />
                  </View>
                </View>
                <View
                  style={{
                    gap: 10,
                    backgroundColor: '#261D37',
                    padding: 20,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    maxWidth: '89%',
                    borderBottomLeftRadius: item.type === 'sender' ? 0 : 8,
                    borderBottomRightRadius: item.type === 'sender' ? 8 : 0,
                  }}>
                  <Text style={styles.msg}>{item.text}</Text>
                  <Text
                    style={{
                      fontFamily: 'Play-Regular',
                      fontSize: 12,
                      color: '#D1CBD8',
                      textAlign:item.type==='sender'?'left':'right'
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <View style={styles.messageInput}>
          <View style={styles.messageInputLeft}>
            <TouchableOpacity activeOpacity={0.8}>
              <Icons.SmilyIcon />
            </TouchableOpacity>
            <TextInput
              placeholder="Message"
              style={styles.messageTextInput}
              placeholderTextColor={'#9D9D9D'}
            />
          </View>
          <View style={styles.messageInputRight}>
            <TouchableOpacity activeOpacity={0.8}>
              <Icons.AttachIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons.CameraIcon activeOpacity={0.8} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.sendButton}>
          <Icons.SendIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IndividualChat;
