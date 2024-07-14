import React, {useState} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/AppHeader';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Slider} from '@react-native-assets/slider';
import Icons from '../../../assets/icons';
import {styles} from './Dashboard.style';

const Dashboard = () => {
  const [sliderValues, setSliderValues] = useState([11, 6, 4]);

  const lastFiveMatches = [
    {
      id:1,
      gameName: 'Free Play 1vs1(training........)',
      opponent: 'Jenny Wilson',
      status: 'Win',
    },
    {
      id:2,
      gameName: 'Free Play 1vs1(training........)',
      opponent: 'Jenny Wilson',
      status: 'Win',
    },
    {
      id:3,
      gameName: 'Free Play 1vs1(training........)',
      opponent: 'Jenny Wilson',
      status: 'Lose',
    },
    {
      id:4,
      gameName: 'Free Play 1vs1(training........)',
      opponent: 'Jenny Wilson',
      status: 'Lose',
    },
    {
      id:5,
      gameName: 'Free Play 1vs1(training........)',
      opponent: 'Jenny Wilson',
      status: 'Win',
    },
  ];

  const renderMatchItem = ({item}) => (
    <View style={styles.matchItem}>
      <View style={styles.matchItemLeft}>
        <Icons.AppIcon height={30} width={30} />
        <Text style={styles.matchItemGameName} numberOfLines={2}>
          {item.gameName}
        </Text>
      </View>
      <Text style={styles.matchItemOpponent}>{item.opponent}</Text>
      <Text
        style={[
          styles.matchItemStatus,
          item.status === 'Win' ? styles.matchItemWin : styles.matchItemLose,
        ]}>
        {item.status}
      </Text>
    </View>
  );

  const timelineEvents = [
    {
      id:1,
      icon: <Icons.PencilIcon />,
      bgColor: '#1890FF1F',
      borderColor: '#1890FF7A',
      title: 'Profile Updated',
      description: 'You updated your profile picture',
      time: 'Monday (12 June)',
    },
    {
      id:2,
      icon: <Icons.AddChatYellowIcon />,
      bgColor: '#FFC1071F',
      borderColor: '#FFC1077A',
      title: 'Added In room',
      description: 'You have been added to the play room by Sam.',
      time: '12 hours ago',
    },
    {
      id:3,
      icon: <Icons.AddChatYellowIcon />,
      bgColor: '#FFC1071F',
      borderColor: '#FFC1077A',
      title: 'Added In room',
      description: 'You have been added to the play room by Sam.',
      time: '12 hours ago',
    },
    {
      id:4,
      icon: <Icons.PencilIcon />,
      bgColor: '#1890FF1F',
      title: 'Profile Updated',
      description: 'You updated your profile picture',
      time: 'Monday (12 June)',
    },
  ];

  const renderTimelineItem = ({item, index}) => {
    const isLastItem = index === timelineEvents.length - 1;
    return (
      <View style={styles.timelineItem}>
        <View style={styles.timelineIconContainer}>
          <View style={[styles.timelineIcon, {backgroundColor: item.bgColor}]}>
            {item.icon}
          </View>
          {!isLastItem && (
            <View
              style={[styles.timelineLine, {borderColor: item.borderColor}]}
            />
          )}
        </View>
        <View style={styles.timelineTextContainer}>
          <Text style={styles.timelineTitle}>{item.title}</Text>
          <Text style={styles.timelineDescription}>{item.description}</Text>
          <Text style={styles.timelineTime}>{item.time}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView  contentContainerStyle={{flexGrow:1,paddingBottom:100}}  showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.dashboardHeader}>
          <Icons.DashboardIconNA />
          <Text style={styles.dashboardHeaderText}>Dashboard</Text>
        </View>
        <View style={styles.challengeOverviewContainer}>
          <View style={styles.challengeHeader}>
            <Text style={styles.challengeHeaderText}>
              Challenge Win Overview
            </Text>
            <Icons.ShieldIcon />
          </View>
          <View style={styles.rankIconContainer}>
            <Icons.RankIcon />
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsLabelsContainer}>
              <View style={styles.statsLabelGroup}>
                <Text style={styles.statsLabel}>Win</Text>
                <Text style={styles.statsLabel}>Loss</Text>
                <Text style={styles.statsLabel}>Total Match</Text>
                <Text style={styles.statsLabel}>Total Player</Text>
              </View>
              <View style={styles.statsValuesGroup}>
                <Text style={styles.winValue}>06</Text>
                <Text style={styles.lossValue}>05</Text>
                <Text style={styles.matchValue}>11</Text>
                <Text style={styles.playerValue}>14</Text>
              </View>
            </View>
            <AnimatedCircularProgress
              size={90}
              width={7}
              fill={66.76}
              tintColor="#54D62C"
              backgroundColor="#D1CBD8">
              {() => <Text style={styles.circularProgressText}>66.76%</Text>}
            </AnimatedCircularProgress>
          </View>
        </View>
        <View style={styles.coinsContainer}>
          <View style={styles.coinsHeader}>
            <View style={styles.coinsHeaderTextContainer}>
              <Text style={styles.coinsHeaderText}>E-FOOT Coins</Text>
              <Icons.ShieldIcon />
            </View>
            <View style={styles.coinsBadge}>
              <Icons.CoinIcon />
              <Text style={styles.coinsBadgeText}>11</Text>
            </View>
          </View>
          <View style={styles.slidersContainer}>
            {sliderValues.map((value, index) => (
              <View key={index} style={styles.sliderContainer}>
                <Slider
                  value={value}
                  minimumValue={0}
                  maximumValue={12}
                  step={1}
                  minimumTrackTintColor="#4A00E8"
                  maximumTrackTintColor="#D1CBD8"
                  style={styles.slider}
                  vertical
                  inverted
                  thumbStyle={styles.sliderThumb}
                  trackStyle={styles.sliderTrack}
                  minTrackStyle={[
                    styles.minTrack,
                    value === 12 ? styles.sliderMaxRadius : null,
                  ]}
                  maxTrackStyle={[
                    styles.maxTrack,
                    value === 0 ? styles.sliderMinRadius : null,
                  ]}
                  enabled={false}
                />
                <Text style={styles.sliderLabel}>
                  {['Coins', 'Wins', 'Loss'][index]} ({value})
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.matchesContainer}>
          <View style={styles.matchesHeader}>
            <Text style={styles.matchesHeaderText}>Last 5 matches</Text>
            <Icons.ShieldIcon />
          </View>
          <View style={styles.matchesListContainer}>
            <View style={styles.matchesListHeader}>
              <Text style={styles.matchesListHeaderText}>Game Name</Text>
              <Text style={styles.matchesListHeaderText}>Opponent</Text>
              <Text style={styles.matchesListHeaderText}>Status</Text>
            </View>
            <FlatList
              data={lastFiveMatches}
              renderItem={renderMatchItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineHeader}>
            <View style={styles.timelineHeaderTextContainer}>
              <Text style={styles.timelineHeaderText}>User Timeline</Text>
              <Icons.ShieldIcon />
            </View>
            <Text style={styles.timelineShowAll}>Show all</Text>
          </View>
          <View style={styles.timelineListContainer}>
            <FlatList
              data={timelineEvents}
              renderItem={renderTimelineItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
