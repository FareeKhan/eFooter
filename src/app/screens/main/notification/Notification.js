import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../../../assets/icons';
import AppHeader from '../../../components/AppHeader';
import {styles} from './Notification.style';

const Notification = () => {

  const notifications = {
    new: [
      {
        id: '1',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '11 hours ago',
      },
      {
        id: '2',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '11 hours ago',
      },
      {
        id: '3',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '11 hours ago',
      },
    ],
    earlier: [
      {
        id: '4',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '1 day ago',
      },
      {
        id: '5',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '2 days ago',
      },
      {
        id: '6',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '3 days ago',
      },
      {
        id: '7',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '1 day ago',
      },
      {
        id: '8',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '2 days ago',
      },
      {
        id: '9',
        notTitle: 'Profile Updated',
        notDes: 'You updated your profile picture',
        notTime: '3 days ago',
      },
    ],
  };

  const renderNotificationItem = ({item}) => (
    <View style={styles.msgContainer}>
      <View style={styles.msgRow}>
        <View style={styles.msgIconContainer}>
          <Icons.IIcon />
        </View>
        <View style={styles.msgTextContainer}>
          <Text style={styles.msgTitle}>{item.notTitle}</Text>
          <Text style={styles.msgDescription}>{item.notDes}</Text>
          <Text style={styles.msgTime}>{item.notTime}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <Text style={styles.notificationTitle}>Notifications</Text>
        <View style={styles.searchInputContainer}>
          <Icons.SearchIcon />
          <TextInput
            placeholder="Search notification"
            style={styles.searchInput}
            placeholderTextColor={'#D1CBD8'}
          />
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.newTextTitle}>New</Text>
          <View style={styles.newMsgsContainer}>
          <FlatList
            data={notifications.new}
            renderItem={renderNotificationItem}
            keyExtractor={item => item.id}
          />
          </View>
          <Text style={styles.earlierTextTitle}>Earlier</Text>
          <FlatList
            data={notifications.earlier}
            renderItem={renderNotificationItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
