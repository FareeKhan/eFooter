import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import {styles} from './Chat.style';

const Chat = () => {
  const navigation = useNavigation();
  const chatData = [
    {
      id: '1',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
      unread: true,
    },
    {
      id: '2',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 3,
      profileImage: require('../../../assets/images/pngs/usersProfile/2.png'),
      online: true,
      unread: true,
    },
    {
      id: '3',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/3.png'),
      online: false,
      unread: false,
    },
    {
      id: '4',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 5,
      profileImage: require('../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
      unread: true,
    },
    {
      id: '5',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/2.png'),
      online: true,
      unread: false,
    },
    {
      id: '6',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/3.png'),
      online: true,
      unread: true,
    },
    {
      id: '7',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
      unread: true,
    },
    {
      id: '8',
      name: 'Jenny Wilson',
      message: 'Okay Done.',
      time: '11:20 pm',
      unreadCount: 2,
      profileImage: require('../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
      unread: true,
    },
  ];

  const ChatItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Chat', {
          screen: 'IndividualChat',
        })
      }
      activeOpacity={0.8}
      style={styles.chatmainContainer}>
      <View style={styles.chatInfoContainer}>
        <View>
          <Image
            source={item.profileImage}
            style={styles.userProfileImage}
            resizeMode="cover"
          />
          {item.online === true ? (
            <View style={styles.onlineIndicatorContainer}>
              <View style={styles.onlineIndicator} />
            </View>
          ) : null}
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>{item.name}</Text>
          <Text style={styles.profileMsg}>{item.message}</Text>
        </View>
      </View>
      <View style={styles.messageInfoContainer}>
        <Text
          style={[
            styles.messageTime,
            {color: item.unread === true ? '#33D49D' : '#D1CBD8'},
          ]}>
          {item.time}
        </Text>
        {item.unread === true ? (
          <View style={styles.unreadBadgeContainer}>
            <Text style={styles.unreadBadgeText}>{item.unreadCount}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:100}} showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.chatHeadingContainer}>
          <Icons.ChatIconNA />
          <Text style={styles.chatHeadingText}>Chat with friends</Text>
        </View>
        <View style={styles.iconsContainersRow}>
          <View style={styles.searchInputContainer}>
            <Icons.SearchIcon />
            <TextInput
              placeholder="Search users"
              style={styles.searchInput}
              placeholderTextColor={'#D1CBD8'}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat', {
                screen: 'ChallengeRequest',
              })
            }
            activeOpacity={0.8}
            style={styles.iconContainer}>
            <Icons.UserIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat', {
                screen: 'ChallengeInvite',
              })
            }
            activeOpacity={0.8}
            style={styles.iconContainer}>
            <Icons.ChatPlusIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Chat', {
            screen: 'GlobalChat',
          })
        }
          activeOpacity={0.8}
          style={styles.globalChatBtnContainer}>
          <Icons.GlobalChatIcon />
          <Text style={styles.globalChatBtnText}>Join Global Chat</Text>
        </TouchableOpacity>
        <FlatList
          data={chatData}
          renderItem={({item}) => <ChatItem item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30, gap: 10}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
