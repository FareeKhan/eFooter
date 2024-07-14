import React, {useState} from 'react';
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
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {styles} from './Tournament.style';

const Tournament = () => {
  const [isOpened, setisOpened] = useState(false);
  const navigation = useNavigation();

  const tournaments = [
    {
      id: '1',
      title: 'FREE play 1Vs1 (training)',
      date: 'Sep 02 . Starting at 6:00 PM',
      image: require('../../../assets/images/pngs/gamesAvailable/1.png'),
      device: 'PS5',
      game: 'efoot',
    },
    {
      id: '2',
      title: 'FREE play 1Vs1 (training)',
      date: 'Sep 02 . Starting at 6:00 PM',
      image: require('../../../assets/images/pngs/gamesAvailable/2.png'),
      device: 'PS5',
      game: 'efoot',
    },
    {
      id: '3',
      title: 'FREE play 1Vs1 (training)',
      date: 'Sep 02 . Starting at 6:00 PM',
      image: require('../../../assets/images/pngs/gamesAvailable/1.png'),
      device: 'PS5',
      game: 'efoot',
    },
    {
      id: '4',
      title: 'FREE play 1Vs1 (training)',
      date: 'Sep 02 . Starting at 6:00 PM',
      image: require('../../../assets/images/pngs/gamesAvailable/2.png'),
      device: 'PS5',
      game: 'efoot',
    },
  ];

  const deviceData = [
    {id: '1', deviceName: 'PS5'},
    {id: '2', deviceName: 'Xbox'},
    {id: '3', deviceName: 'Play station'},
  ];

  const availabilityDurations = [
    {id: '1', duration: '1hr'},
    {id: '2', duration: '2hr'},
    {id: '3', duration: '3hr'},
    {id: '4', duration: '4hr'},
    {id: '5', duration: '5hr'},
    {id: '6', duration: '10+ hr'},
  ];

  const renderTournamentCard = ({item}) => (
    <View style={styles.tournamentCard}>
      <Image
        source={item.image}
        style={styles.tournamentImage}
        resizeMode="cover"
      />
      <View style={styles.tournamentDetails}>
        <Text style={styles.tournamentTitle}>{item.title}</Text>
        <Text style={styles.tournamentDate}>{item.date}</Text>
        <View style={styles.btnsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.ps5Btn}>
            <Text style={styles.ps5Text}>{item.device}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.efootBtn}>
            <Text style={styles.efootText}>{item.game}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.organizerContainer}>
          <Image
            source={require('../../../assets/images/pngs/usersProfile/1.png')}
            style={styles.organizerImage}
            resizeMode="cover"
          />
          <View style={styles.organizerInfo}>
            <Text style={styles.organizedByText}>Organized by</Text>
            <Text style={styles.organizerName}>Patric Haris</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinMatchButton} activeOpacity={0.8}>
          <Text style={styles.joinMatchButtonText}>Join Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const searchFilter = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons.FilterIcon />
        <Text style={styles.headerText}>Search Filter</Text>
      </View>
      <View style={styles.deviceContainer}>
        <Text style={styles.deviceText}>Device</Text>
        <FlatList
          data={deviceData}
          renderItem={({item}) => (
            <View style={styles.deviceBox}>
              <Text style={styles.deviceBoxText}>{item.deviceName}</Text>
            </View>
          )}
          numColumns={3}
          columnWrapperStyle={{gap: 10, paddingTop: 15}}
        />
      </View>
      <View>
        <Text style={styles.availabilityText}>Availability duration</Text>
        <FlatList
          data={availabilityDurations}
          renderItem={({item}) => (
            <View style={styles.availabilityBox}>
              <Text style={styles.availabilityBoxText}>{item.duration}</Text>
            </View>
          )}
          numColumns={5}
          columnWrapperStyle={{gap: 15, paddingTop: 15}}
        />
      </View>
      <View style={styles.btnsView}>
        <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:100}} showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.tournamentsHeader}>
          <View style={styles.tournamentsTitleContainer}>
            <Icons.GameIconWhite />
            <Text style={styles.tournamentsTitle}>Tournaments (09)</Text>
          </View>
          <Text style={styles.showAllText}>Show all</Text>
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
          {isOpened ? (
            <BottomSheetComponent
              onPressMenu={() => setisOpened(!isOpened)}
              Component={searchFilter}
              BGSheetColor={'#261D37'}
              HEIGHT={560}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => {
              setisOpened(!isOpened);
            }}
            activeOpacity={0.8}
            style={styles.filterIconContainer}>
            <Icons.FilterIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          data={tournaments}
          renderItem={renderTournamentCard}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tournament;
