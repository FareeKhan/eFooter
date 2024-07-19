import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Icons from '../../../assets/icons';
import {styles} from './MyMatches.style';
import AppHeader from '../../../components/AppHeader';

import ImagePicker from 'react-native-image-crop-picker';

const MyMatches = () => {
  const [currentStatus, setCurrentStatus] = useState('Pending');
  const [image, setImage] = useState('');

  const [proofModal, setProofModal] = useState(false);

  const [scoreModal, setScoreModal] = useState(false);
  const [score, setScore] = useState();
  const [opponentScore, setOpponentScore] = useState();
  const [isFormFilled, setIsFormFilled] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (score && opponentScore) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [score, opponentScore]);

  const renderBtn = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.btnContainer,
        {
          backgroundColor:
            currentStatus === item.status ? '#4A00E8' : '#261D37',
        },
      ]}
      activeOpacity={0.8}
      onPress={() => setCurrentStatus(item.status)}>
      <Text style={styles.btnText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const matches = [
    {
      id: '1',
      game: 'FREE Play 1vs1 (training)',
      console: 'Xbox Series X en S',
      mode: 'FUT 1vs1',
      type: 'Private',
      status: 'Pending',
      challenger: 'Patric Haris Benedict',
      accepter: 'Patric Haris',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
    },
    {
      id: '2',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Accepted',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '3',
      game: 'FREE Play 1vs1 (training)',
      console: 'Xbox Series X en S',
      mode: 'FUT 1vs1',
      type: 'Private',
      status: 'Dispute',
      challenger: 'Patric Haris Benedict',
      accepter: 'Patric Haris',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
    },
    {
      id: '4',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Win',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '5',
      game: 'FREE Play 1vs1 (training)',
      console: 'Xbox Series X en S',
      mode: 'FUT 1vs1',
      type: 'Private',
      status: 'lose',
      challenger: 'Patric Haris Benedict',
      accepter: 'Patric Haris',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/1.png'),
    },
    {
      id: '6',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Draw',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '7',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Pending',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '8',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Win',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '9',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Win',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
    {
      id: '10',
      game: 'Another Game',
      console: 'Another Console',
      mode: 'Another Mode',
      type: 'Public',
      status: 'Win',
      challenger: 'Another Challenger',
      accepter: 'Another Accepter',
      challengerAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
      accepterAvatar: require('../../../assets/images/pngs/usersProfile/2.png'),
    },
  ];

  const filteredMatches = matches.filter(
    match => match.status === currentStatus,
  );

  const renderMatch = ({item}) => (
    <View style={styles.matchContainer}>
      <View style={styles.matchIconRow}>
        <Icons.AppIcon height={40} width={50} />
        <View style={styles.gameIconInfo}>
          <Text style={styles.gameLabel}>
            Game: <Text style={styles.gameValue}>{item.game}</Text>
          </Text>
          <Text style={styles.consoleLabel}>
            Console: <Text style={styles.consoleValue}>{item.console}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.gameInfoRow}>
        <View style={styles.gameInfo}>
          <Text style={styles.modeLabel}>
            Mode: <Text style={styles.modeValue}>{item.mode}</Text>
          </Text>
          <Text style={styles.typeLabel}>
            Type: <Text style={styles.typeValue}>{item.type}</Text>
          </Text>
          <Text style={styles.statusLabel}>
            Status:{' '}
            <Text
              style={[
                styles.statusValue,
                {
                  color: btns.find(item => item.status === currentStatus)
                    ?.statusColor,
                },
              ]}>
              {currentStatus}
            </Text>
          </Text>
        </View>
        <View style={styles.gameInfo}>
          <View style={styles.challengeContainer}>
            <Image
              source={item.challengerAvatar}
              resizeMode="cover"
              style={styles.challengerProfile}
            />
            <View>
              <Text style={styles.challengeLabel}>Challenged by</Text>
              <Text style={styles.challengeValue}>{item.challenger}</Text>
            </View>
          </View>
          <View style={styles.acceptContainer}>
            <Image
              source={item.accepterAvatar}
              resizeMode="cover"
              style={styles.accepterProfile}
            />
            <View>
              <Text style={styles.acceptLabel}>Accepted by</Text>
              <Text style={styles.acceptValue}>{item.accepter}</Text>
            </View>
          </View>
        </View>
      </View>
      {currentStatus === 'Pending' ||
      currentStatus === 'Accepted' ||
      currentStatus === 'Dispute' ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.acceptBtn}
          onPress={() => {
            currentStatus === 'Dispute'
              ? setProofModal(true)
              : currentStatus === 'Accepted'
              ? setScoreModal(true)
              : '';
          }}>
          <Text style={styles.acceptBtnText}>
            {currentStatus === 'Pending'
              ? 'Accept'
              : currentStatus === 'Dispute'
              ? 'Resolve Dispute'
              : 'Submit score'}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );

  const countMatches = status => {
    return matches.filter(match => match.status === status).length;
  };

  const btns = [
    {
      id: '1',
      title: `Pending (${countMatches('Pending')})`,
      status: 'Pending',
      statusColor: '#FFC107',
    },
    {
      id: '2',
      title: `Accepted (${countMatches('Accepted')})`,
      status: 'Accepted',
      statusColor: '#D1CBD8',
    },
    {
      id: '3',
      title: `Dispute (${countMatches('Dispute')})`,
      status: 'Dispute',
      statusColor: '#1890FF',
    },
    {
      id: '4',
      title: `Win (${countMatches('Win')})`,
      status: 'Win',
      statusColor: '#54D62C',
    },
    {
      id: '5',
      title: `lose (${countMatches('lose')})`,
      status: 'lose',
      statusColor: '#FF4842',
    },
    {
      id: '6',
      title: `Draw (${countMatches('Draw')})`,
      status: 'Draw',
      statusColor: '#D1CBD8',
    },
  ];



  const takeImageFromGallery = () =>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImage(image.path)
      console.log(image);
    });
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1,paddingBottom:100}} showsVerticalScrollIndicator={false}>
        <AppHeader />
        <View style={styles.matchesHeader}>
          <TouchableOpacity activeOpacity={0.8} style={{top: 2}}>
            <Icons.MatchesIcon />
          </TouchableOpacity>
          <Text style={styles.matchesHeaderTitle}>My Matches</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Icons.SearchIcon />
            <TextInput
              placeholder="Search users"
              style={styles.searchInput}
              placeholderTextColor={'#D1CBD8'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.filterIconContainer}>
            <Icons.FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.btnsContainer}>
          <FlatList
            data={btns}
            keyExtractor={item => item.id}
            renderItem={renderBtn}
            numColumns={3}
            contentContainerStyle={{gap: 15}}
            columnWrapperStyle={{gap: 15}}
          />
        </View>
        <FlatList
          data={filteredMatches}
          keyExtractor={item => item.id}
          renderItem={renderMatch}
        />
      </ScrollView>
      <Modal
        isVisible={proofModal}
        onBackdropPress={() => setProofModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Proof Submission</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setProofModal(false)}>
                <Icons.CrossIcon />
              </TouchableOpacity>
            </View>

           {
            image &&
            <View>
              <Image source={{uri:image}} style={{height:400,width:300,marginTop:20}} borderRadius={10} />
              <TouchableOpacity
              style={styles.proofImgCrossIcon}
                activeOpacity={0.8}
                onPress={() => setImage('')}>
                <Icons.CrossIcon />
              </TouchableOpacity>
            </View>
          } 
            
            <TouchableOpacity onPress={takeImageFromGallery} activeOpacity={0.8} style={styles.uploadBtn}>
              <Text style={styles.uploadBtnText}>Upload Proof</Text>
            </TouchableOpacity>
            <View style={styles.proofNoteContainer}>
              <Text style={styles.proofNoteTextBold}>
                Note:{' '}
                <Text style={styles.noteTextReg}>
                  Upload screenshot or score image of game to resolve dispute.
                  Make sure scores are visible properly Uploaded image will be
                  used for inspecting scores. Once uploaded you can't reupload
                  it again
                </Text>
              </Text>
            </View>
            <View style={styles.btnsView}>
              <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={scoreModal}
        onBackdropPress={() => setScoreModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Proof Submission</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setScoreModal(false)}>
                <Icons.CrossIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.scoreNoteContainer}>
              <Text style={styles.scoreNoteTextBold}>
                Note:{' '}
                <Text style={styles.noteTextReg}>
                  Warning! Once submitted, You can't edit it back so be careful.
                  Check twice before submitting.
                </Text>
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Your Score</Text>
              <TextInput
                placeholder="Your Score"
                style={styles.textInput}
                placeholderTextColor={'#D1CBD8'}
                value={score}
                onChangeText={text => setScore(text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Opponent Score</Text>
              <TextInput
                placeholder="Opponent Score"
                style={styles.textInput}
                placeholderTextColor={'#D1CBD8'}
                value={opponentScore}
                onChangeText={text => setOpponentScore(text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.btnsView}>
              <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: isFormFilled ? '#4A00E8' : '#98959A',
                    borderColor: isFormFilled ? '#4A00E8' : '#98959A',
                  },
                ]}>
                <Text style={styles.submitBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MyMatches;
