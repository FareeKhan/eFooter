import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../../components/AppHeader';
import Icons from '../../../../assets/icons';
import {styles} from './ChallengeInvite.style';

const ChallengeInvite = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const challengeData = [
    {
      id: '1',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
    },
    {
      id: '2',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/2.png'),
      online: true,
    },
    {
      id: '3',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/3.png'),
      online: false,
    },
    {
      id: '4',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
    },
    {
      id: '5',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/2.png'),
      online: true,
    },
    {
      id: '6',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/3.png'),
      online: true,
    },
    {
      id: '7',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
    },
    {
      id: '8',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      online: false,
    },
  ];

  const ChallengeItem = ({item}) => (
    <View style={styles.challengeMainContainer}>
      <View style={styles.challengeInfoContainer}>
        <View>
          <Image
            source={item.profileImage}
            style={styles.profileImage}
            resizeMode="cover"
          />
          {item.online === true ? (
            <View style={styles.onlineIndicatorContainer}>
              <View style={styles.onlineIndicator} />
            </View>
          ) : null}
        </View>
        <Text style={styles.profileName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
        style={styles.challengeBtn}>
        <Text style={styles.challengeBtnText}>Challenge</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <View style={styles.challengeHeadingContainer}>
          <Icons.ChatIconNA />
          <Text style={styles.challengeHeadingText}>Challenge a player</Text>
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
            activeOpacity={0.8}
            style={[styles.iconContainer, {backgroundColor: '#4A00E8'}]}>
            <Icons.ChatPlusIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.inviteText}>Invite friends to play with you!</Text>
        <FlatList
          data={challengeData}
          renderItem={({item}) => <ChallengeItem item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30, gap: 10}}
        />
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={{alignSelf: 'center'}} activeOpacity={0.8}>
              <Icons.UserBlueWithBG />
            </TouchableOpacity>
            <Text style={{fontFamily:"Play-Bold",fontSize:22,color:"#D1CBD8",textAlign:"center",paddingTop:20}}>Are you sure?</Text>
            <Text style={{fontFamily:"Play-Regular",fontSize:20,color:"#D1CBD8",textAlign:"center",paddingTop:10}}>You want to send the challenge
            your friend?</Text>
            <View style={styles.btnsView}>
              <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.yesBtn}>
                <Text style={styles.yesBtnText}>Yes, send it!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChallengeInvite;
