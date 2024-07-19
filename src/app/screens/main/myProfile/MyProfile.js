import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/AppHeader';
import SelectModal from '../../../components/SelectModal';
import Icons from '../../../assets/icons';
import {styles} from './MyProfile.style';
import CustomValueSelection from '../../../components/CustomValueSelection';

const MyProfile = () => {
  const [eye, setEye] = useState([true,true,true]);
  const [expandedSections, setExpandedSections] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [selectModalProps, setSelectModalProps] = useState({
    title: '',
    dataList: [],
    onSelect: () => {},
  });
  const [wLRank, setWLRank] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [radioStates, setRadioStates] = useState([true, true]);

  const handleWLRankSelect = () => {
    setSelectModalProps({
      title: '',
      dataList: [
        'NO WINS',
        '0 - 5 WINS',
        '5 - 10 WINS',
        '10 - 15 WINS',
        '15+ WINS',
      ],
      onSelect: setWLRank,
    });
    setModalVisible(true);
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }


  const toggleExpand = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSections(prevState => {
      if (!Array.isArray(prevState)) {
        prevState = [false, false, false, false]; 
      }
      const newExpandedSections = prevState.map((section, idx) => idx === index ? !section : false);
      return newExpandedSections;
    });
  };
  

  const toggleRadio = index => {
    setRadioStates(prevState => {
      const newRadioStates = [...prevState];
      newRadioStates[index] = !newRadioStates[index];
      return newRadioStates;
    });
  };

  const toggleEye = (index) => {
    setEye((prevEye) => {
      const newEye = [...prevEye];
      newEye[index] = !newEye[index];
      return newEye;
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.myProfileHeader}>
          <Icons.UserRoundIcon />
          <Text style={styles.myProfileHeaderText}>My profile</Text>
        </View>
        <View>
          <View style={styles.userBadgeContainer}>
            <Icons.UserBadge  width={220} height={280}/>
          </View>
          <View style={styles.profileDetailsContainer}>
            <Image
              source={require('../../../assets/images/pngs/usersProfile/1.png')}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <Text style={styles.userName}>Darshit Shah</Text>
            <View style={styles.tournamentContainer}>
              <Icons.TournamentOrange height={17} width={17} />
              <Text style={styles.tournamentCount}>12</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <Icons.YoutubeIcon />
              <Icons.TwitterIcon />
              <Icons.InstaIcon />
            </View>
          </View>
        </View>
        <View style={styles.profileLinkContainer}>
          <TextInput
            style={styles.profileLink}
            value="https://myprofilelink.efoot.NL.098.Win..."
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Icons.CopyIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => toggleExpand(0)}
          activeOpacity={0.8}
          style={styles.btn}>
          <View style={styles.btnContent}>
            <Icons.GeneralIcon />
            <Text style={styles.btnText}>General</Text>
          </View>
          {expandedSections[0] ? <Icons.UpArrow /> : <Icons.DownArrow />}
        </TouchableOpacity>
        {expandedSections[0] && (
          <View style={styles.expandedContent}>
            <Text style={styles.expandedTitle}>Profile picture</Text>
            <View style={styles.profilePictureContainer}>
              <Image
                source={require('../../../assets/images/pngs/usersProfile/1.png')}
                style={styles.profilePicture}
                resizeMode="cover"
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.editIcon}>
                <Icons.EditIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.fileSizeInfo}>
              <Icons.YellowIIcon />
              <Text style={styles.fileSizeText}>
                Allowed JPG, GIF or PNG. Max size of 800kB
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>User name</Text>
              <TextInput
                placeholder="Alen Maxwell"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                placeholder="Alenmaxwell@gmail.com"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>First name</Text>
              <TextInput
                placeholder="Alen"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Last name</Text>
              <TextInput
                placeholder="Maxwell"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Birth date</Text>
              <TextInput
                placeholder="2022-04-07"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Twitch account</Text>
              <TextInput
                placeholder="https://twitch.com"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Instagram account</Text>
              <TextInput
                placeholder="https://instagram.com"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Youtube account</Text>
              <TextInput
                placeholder="https://youtube.com"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => toggleExpand(1)}
          activeOpacity={0.8}
          style={styles.btn}>
          <View style={styles.btnContent}>
            <Icons.LinkIcon />
            <Text style={styles.btnText}>Game Id & Rank</Text>
          </View>
          {expandedSections[1] ? <Icons.UpArrow /> : <Icons.DownArrow />}
        </TouchableOpacity>
        {expandedSections[1] && (
          <View style={[styles.expandedContent, {paddingTop: -5}]}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Playstation ID</Text>
              <TextInput
                placeholder="123"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Xbox ID</Text>
              <TextInput
                placeholder="321"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>WL Rank</Text>
              <TouchableOpacity
                onPress={handleWLRankSelect}
                activeOpacity={0.8}
                style={styles.wlRankInput}>
                <Text style={styles.wlRankText}>{wLRank || '15+ wins'}</Text>
                <Icons.DownArrow />
              </TouchableOpacity>
            </View>



            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>EA ID</Text>
              <TextInput
                placeholder="12313"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Esport team</Text>
              <TextInput
                placeholder="E-FOOT.GG"
                placeholderTextColor={'#D1CBD8'}
                style={styles.input}
              />
            </View>
            <View style={styles.saveBTn}>
              <Text style={styles.saveBTnText}>Save changes</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => toggleExpand(2)}
          activeOpacity={0.8}
          style={styles.btn}>
          <View style={styles.btnContent}>
            <Icons.LockIcon />
            <Text style={styles.btnText}>Change Password</Text>
          </View>
          {expandedSections[2] ? <Icons.UpArrow /> : <Icons.DownArrow />}
        </TouchableOpacity>
        {expandedSections[2] && (
          <View style={[styles.expandedContent, {paddingTop:-5}]}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Old Password</Text>
              <View style={styles.secureInputContainer}>
                <TextInput
                  placeholder="ALenmaxwell345"
                  placeholderTextColor={'#D1CBD8'}
                  style={[styles.input, {borderWidth: 0}]}
                  secureTextEntry={eye[0] === true ? true : false}
                  />
                  <TouchableOpacity onPress={()=>toggleEye(0)}>
                    {eye[0] === true ? (
                      <Icons.eyeoffIcon />
                    ) : (
                      <Icons.VisibilityIcon />
                    )}
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>New Password</Text>
              <View style={styles.secureInputContainer}>
                <TextInput
                  placeholder="............"
                  placeholderTextColor={'#D1CBD8'}
                  style={[styles.input, {borderWidth: 0}]}
                  secureTextEntry={eye[1] === true ? true : false}
                  />
                 <TouchableOpacity onPress={()=>toggleEye(1)}>
                    {eye[1] === true ? (
                      <Icons.eyeoffIcon />
                    ) : (
                      <Icons.VisibilityIcon />
                    )}
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm new Password</Text>
              <View style={styles.secureInputContainer}>
                <TextInput
                  placeholder="............"
                  placeholderTextColor={'#D1CBD8'}
                  style={[styles.input, {borderWidth: 0}]}
                  secureTextEntry={eye[2] === true ? true : false}
                  />
                  <TouchableOpacity onPress={()=>toggleEye(2)}>
                    {eye[2] === true ? (
                      <Icons.eyeoffIcon />
                    ) : (
                      <Icons.VisibilityIcon />
                    )}
                  </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.joinMatchBtn}>
              <Text style={styles.joinMatchBtnText}>Join Match</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => toggleExpand(3)}
          activeOpacity={0.8}
          style={styles.btn}>
          <View style={styles.btnContent}>
            <Icons.NotificationIcon />
            <Text style={styles.btnText}>User preferences</Text>
          </View>
          {expandedSections[3] ? <Icons.UpArrow /> : <Icons.DownArrow />}
        </TouchableOpacity>
        {expandedSections[3] && (
          <View style={[styles.expandedContent, {paddingTop: -5}]}>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>
                Chat Notifications(You will get the notification for the chat
                request and unviewed messages)
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.radioBtn,
                  {opacity: radioStates[0] === false ? 0.3 : 1},
                ]}
                onPress={() => toggleRadio(0)}></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => toggleRadio(0)}
                style={[
                  styles.radio,
                  {right: radioStates[0] ? '2%' : '7%'},
                ]}></TouchableOpacity>
            </View>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>
                Challenge (You will get notification for challenge invite
                challenge accepted and result){' '}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.radioBtn,
                  {opacity: radioStates[1] === false ? 0.3 : 1},
                ]}
                onPress={() => toggleRadio(1)}></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => toggleRadio(1)}
                style={[
                  styles.radio,
                  {right: radioStates[1] ? '2%' : '7%'},
                ]}></TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.joinMatchBtn}>
              <Text style={styles.joinMatchBtnText}>Join Match</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <SelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        title={selectModalProps.title}
        dataList={selectModalProps.dataList}
        onSelect={item => {
          selectModalProps.onSelect(item);
          setModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

export default MyProfile;
