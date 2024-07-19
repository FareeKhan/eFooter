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
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import AppHeader from '../../../../components/AppHeader';
import Icons from '../../../../assets/icons';
import {styles} from './ChallengeRequest.style';

const ChallengeRequest = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedChallenge, setSelectedChallenge] = useState({});

  const navigation = useNavigation();

  const challengeData = [
    {
      id: '1',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      challengeRequest: 'Pending',
    },
    {
      id: '2',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/2.png'),
      challengeRequest: 'Accepted',
    },
    {
      id: '3',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/3.png'),
      challengeRequest: 'Pending',
    },
    {
      id: '4',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      challengeRequest: 'Accepted',
    },
    {
      id: '5',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/2.png'),
      challengeRequest: 'Accepted',
    },
    {
      id: '6',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/3.png'),
      challengeRequest: 'Accepted',
    },
    {
      id: '7',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      challengeRequest: 'Pending',
    },
    {
      id: '8',
      name: 'Jenny Wilson',
      profileImage: require('../../../../assets/images/pngs/usersProfile/1.png'),
      challengeRequest: 'Pending',
    },
  ];

  const ChallengeItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedChallenge(item);
        setModalVisible(true);
      }}
      activeOpacity={0.8}
      style={styles.challengeMainContainer}>
      <View style={styles.challengeInfoContainer}>
        <Image
          source={item.profileImage}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.profileName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.statusBtn,
          {
            backgroundColor:
              item.challengeRequest == 'Pending' ? '#FFC1071F' : '#54D62C1F',
          },
        ]}>
        <Text
          style={[
            styles.statusBtnText,
            {color: item.challengeRequest == 'Pending' ? '#FFC107' : '#54D62C'},
          ]}>
          {item.challengeRequest}
        </Text>
      </TouchableOpacity>
      {item.challengeRequest == 'Pending' ? (
        <TouchableOpacity activeOpacity={0.8} style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Accept</Text>
        </TouchableOpacity>
      ) : (
        <View style={{width: '22%'}} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <View style={styles.challengeHeadingContainer}>
          <Icons.ChatIconNA />
          <Text style={styles.challengeHeadingText}>Challenge request</Text>
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
          onPress={()=>navigation.replace('ChatScreen')}
            activeOpacity={0.8}
            style={[styles.iconContainer, {backgroundColor: '#4A00E8'}]}>
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
        <View style={styles.headerLabelsContainer}>
          <Text style={[styles.headerLabelText, {width: '50%'}]}>Profile</Text>
          <Text style={[styles.headerLabelText, {width: '27%'}]}>Status</Text>
          <Text style={[styles.headerLabelText, {width: '35%'}]}>Action</Text>
        </View>
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
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              activeOpacity={0.8}
              onPress={() => setModalVisible(false)}>
              <Icons.CrossIcon />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <Image
                source={require('../../../../assets/images/pngs/usersProfile/1.png')}
                resizeMode="cover"
                style={{height: 60, width: 60, borderRadius: 50}}
              />
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 20,
                  color: '#D1CBD8',
                }}>
                Jenny Wilson
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 16,
                  color: '#D1CBD8',
                }}>
                Status:
              </Text>
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 16,
                  color:
                    selectedChallenge.challengeRequest === 'Pending'
                      ? '#FFC107'
                      : '#54D62C',
                  padding: 8,
                  backgroundColor:
                    selectedChallenge.challengeRequest === 'Pending'
                      ? '#FFC1071F'
                      : '#54D62C1F',
                  borderRadius: 8,
                }}>
                {selectedChallenge.challengeRequest}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 16,
                  color: '#D1CBD8',
                }}>
                Time:
              </Text>
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 16,
                  color: '#D1CBD8',
                }}>
                21 hours ago
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Play-Bold',
                  fontSize: 16,
                  color: '#D1CBD8',
                }}>
                Action:
              </Text>
              <Text
                style={[
                  {
                    fontFamily: 'Play-Bold',
                    fontSize: 16,
                    color: '#D1CBD8',
                  },
                  selectedChallenge.challengeRequest === 'Pending' && {
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    borderWidth: 1,
                    borderColor: '#D1CBD8',
                    borderRadius: 8,
                  },
                ]}>
                {selectedChallenge.challengeRequest === 'Pending'
                  ? 'Accept'
                  : 'Accepted'}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginTop: 20,
                paddingVertical: 15,
                paddingHorizontal: 20,
                backgroundColor: '#4A00E8',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Black',
                  fontSize: 14,
                  color: '#D1CBD8',
                }}>
                View profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChallengeRequest;
