import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import {styles} from './HowToPlay.style';

const HowToPlay = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.howToPlayHeader}>
          <Icons.QuestionIcon />
          <Text style={styles.howToPlayHeaderText}>How to play?</Text>
        </View>
        <View>
          <View>
            <Image
              source={require('../../../assets/images/jpegs/upcomingGameBG.jpeg')}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <View style={styles.overlayContainer}>
              <Text style={styles.overlayTitle}>How to Play?</Text>
              <Text style={styles.overlaySubtitle}>Play as a pro not as noob</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Getting started</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/1.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Once you've filled in your profile information, you're ready to
                get started. You can start a game from the Home menu using the
                Play Now button, or press Start Game in the menu. Once your
                challenge has been accepted, play the match on your PC, Play
                station 4, 5 or Xbox series.
              </Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Play now</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/2.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.stepsContainer}>
              <View style={styles.stepRow}>
                <Text style={styles.stepNumber}>Step -1 :</Text>
                <Text style={styles.stepText}>Start Game</Text>
              </View>
              <View style={styles.stepRow}>
                <Text style={styles.stepNumber}>Step -2 :</Text>
                <Text style={styles.stepText}>Choose your game mode</Text>
              </View>
              <View style={styles.stepRow}>
                <Text style={styles.stepNumber}>Step -3 :</Text>
                <Text style={styles.stepText}>Enter the result of your game within 24 hours</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Reporting result</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/3.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Once your match is completed click 'Submit Score' to verify your
                score. If your score meets the score of your opponent, the
                points will be allocated to your profile. If the scores do not
                match a dispute will be created and you need to upload evidence
                of your score in the dispute section. {'\n\n'}
                Remember, it is vital that you be honest when reporting results
                as lying and cheating the system can put your account in danger
                of being banned or permanently terminated depending on the
                degree and consistency of the offenses.
              </Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Game modes</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/4.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <View style={styles.gameModeContainer}>
                <Text style={styles.gameModeTitle}>What is a FREE Play 1vs1?</Text>
                <Text style={styles.gameModeText}>
                  This match is a training mode, you can play as many FREE games
                  as you want, no points can be won with this game mode.
                </Text>
              </View>
              <View style={styles.gameModeContainer}>
                <Text style={styles.gameModeTitle}>What is E-FOOT ARENA 1vs1?</Text>
                <Text style={styles.gameModeText}>
                  Using this game mode you can win points when you win or draw a
                  game. Play. Each month (1st day of the month) your points will
                  be set to zero. You can only play the same opponent once in 24
                  hours.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Game modes</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/4.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <View>
                <Text style={styles.rewardTitle}>🎉Win:</Text>
                <Text style={styles.rewardText}>For each game you win the player received 5 points</Text>
              </View>
              <View>
                <Text style={styles.rewardTitle}>✨Draw:</Text>
                <Text style={styles.rewardText}>For each draw you will receive 3 points</Text>
              </View>
              <View>
                <Text style={styles.rewardTitle}>🎈Loss:</Text>
                <Text style={styles.rewardText}>For a loss you get 1 point</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>E-FOOT ARENA Leader Board</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/5.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Playing in the e-foot arena will automatically get you in the
                leaderboard. Your personal scores of each month will be ranked
                in our leaderboard. The leaderboard will be promoted and is a
                perfect chance to get your name out there. In addition, we will
                offer special prizes and deals to the leaders in the leaderboard
                throughout the year. Each new version of FIFA the leaderboard
                will be reset.
              </Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Our Shop</Text>
            <Image
              source={require('../../../assets/images/pngs/howToPlay/6.png')}
              style={styles.sectionImage}
              resizeMode="cover"
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Our shop will soon be available, where you can use your points
                to order amazing prizes!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HowToPlay;
