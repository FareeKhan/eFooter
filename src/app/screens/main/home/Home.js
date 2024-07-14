import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  LogBox,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tooltip from 'react-native-walkthrough-tooltip';
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {styles} from './Home.style';

const Home = () => {
  const [isOpened, setisOpened] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  const users = [
    {
      id: '1',
      name: 'Patric Haris',
      profileImage: require('../../../assets/images/pngs/usersProfile/1.png'),
      tournaments: 12,
      badges: 345,
    },
    {
      id: '2',
      name: 'Patric Haris',
      profileImage: require('../../../assets/images/pngs/usersProfile/2.png'),
      tournaments: 12,
      badges: 345,
    },
    {
      id: '3',
      name: 'Patric Haris',
      profileImage: require('../../../assets/images/pngs/usersProfile/3.png'),
      tournaments: 12,
      badges: 345,
    },
  ];

  const games = [
    {
      id: '1',
      title: 'FREE play 1Vs1 (training)',
      admin: 'Admin efoot | PS5',
      date: '26-05-23; 04:56',
      image: require('../../../assets/images/pngs/gamesAvailable/1.png'),
    },
    {
      id: '2',
      title: 'FREE play 1Vs1 (training)',
      admin: 'Admin efoot | PS5',
      date: '26-05-23; 04:56',
      image: require('../../../assets/images/pngs/gamesAvailable/2.png'),
    },
  ];

  const winCategories = [
    {id: '1', range: '0 - 5 WINS'},
    {id: '2', range: '5 - 10 WINS'},
    {id: '3', range: '10 - 15 WINS'},
    {id: '4', range: '15 - 20 WINS'},
    {id: '5', range: '20 - 30 WINS'},
    {id: '6', range: '30+ WINS'},
  ];

  const availabilityDurations = [
    {id: '1', duration: '1hr'},
    {id: '2', duration: '2hr'},
    {id: '3', duration: '3hr'},
    {id: '4', duration: '4hr'},
    {id: '5', duration: '5hr'},
    {id: '6', duration: '10+ hr'},
  ];

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])

  const renderUserCard = ({item}) => (
    <View style={styles.userCard}>
      <View style={styles.userCardDetails}>
        <Image
          source={item.profileImage}
          style={styles.userProfileImage}
          resizeMode="cover"
        />
        <Text style={styles.userName}>{item.name}</Text>
      </View>
      <View style={styles.userStats}>
        <View style={styles.tournamentContainer}>
          <Icons.TournamentOrange />
          <Text style={styles.tournamentCount}>{item.tournaments}</Text>
        </View>
        <View style={styles.badgeContainer}>
          <Icons.BadgeBlue />
          <Text style={styles.badgeCount}>{item.badges}</Text>
        </View>
      </View>
    </View>
  );

  const renderGameCard = ({item}) => (
    <View style={styles.gameCard}>
      <Image source={item.image} style={styles.gameImage} resizeMode="cover" />
      <View style={styles.gameDetails}>
        <Text style={[styles.gameTitle, {width: '75%'}]}>{item.title}</Text>
        <Text style={styles.gameAdmin}>{item.admin}</Text>
        <Text style={styles.gameDate}>{item.date}</Text>
        <TouchableOpacity
          onPress={() => setIsToolTipOpen(true)}
          style={styles.joinMatchButton}
          activeOpacity={0.8}>
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
      <View style={styles.winCategoryContainer}>
        <Text style={styles.winCategoryText}>Win category</Text>
        <FlatList
          data={winCategories}
          renderItem={({item}) => (
            <View style={styles.winCategoryBox}>
              <Text style={styles.winCategoryBoxText}>{item.range}</Text>
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
        <AppHeader />
        <View>
          <View style={styles.upcomingGamesContainer}>
            <View style={styles.upcomingGamesHeader}>
              <Icons.GameIconWhite />
              <Text style={styles.upcomingGamesTitle}>Upcoming games</Text>
            </View>
            <Image
              source={require('../../../assets/images/jpegs/upcomingGameBG.jpeg')}
              style={styles.upcomingGamesImage}
              resizeMode="cover"
            />
            <View style={styles.upcomingGameDetailsContainer}>
              <View style={styles.upcomingGameDetails}>
                <View style={styles.gameInfo}>
                  <Text style={styles.gameTitle}>
                    FREE play 1Vs1 (training)
                  </Text>
                  <Text style={styles.gameAdmin}>Admin efoot | PS5</Text>
                  <Text style={styles.gameDate}>26-05-23; 04:56</Text>
                </View>
                <Icons.RightArrowWithBGIcon />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.gamesAvailableContainer}>
          <View style={styles.gamesAvailableHeader}>
            <View style={styles.gamesAvailableTitleContainer}>
              <Icons.GameIconWhite />
              <Text style={styles.gamesAvailableTitle}>
                Games available (2)
              </Text>
            </View>
            <Text style={styles.showAllText}>Show all</Text>
          </View>
          <FlatList
            data={games}
            renderItem={renderGameCard}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.onlineUsersContainer}>
          <View style={styles.onlineUsersHeader}>
            <Icons.UsersIcon />
            <Text style={styles.onlineUsersTitle}>Online Users (3)</Text>
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
            data={users}
            renderItem={renderUserCard}
            keyExtractor={item => item.id}
          />
        </View>
        <Tooltip
          isVisible={isToolTipOpen}
          contentStyle={{backgroundColor: 'transparent',width:380,marginHorizontal:-20}}
          content={
            <View style={styles.tooltipContainer}>
              <View style={styles.tooltipRow}>
                <Icons.CheckCircleIcon />
                <Text style={styles.tooltipText}>Welcome to E-foot!</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsToolTipOpen(false)}
                activeOpacity={0.8}>
                <Icons.GreenCrossIcon />
              </TouchableOpacity>
            </View>
          }
          placement="bottom"
          displayInsets={{bottom: 120}}
          onClose={() => setIsToolTipOpen(false)}></Tooltip>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
