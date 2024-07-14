import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectModal from '../../../components/SelectModal';
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import {styles} from './Game.style';

const Game = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectModalProps, setSelectModalProps] = useState({
    title: '',
    dataList: [],
    onSelect: () => {},
  });

  const [selectedConsole, setSelectedConsole] = useState('');
  const [selectedGameMode, setSelectedGameMode] = useState('');
  const [selectedChallengeType, setSelectedChallengeType] = useState('');
  const [allSelected, setAllSelected] = useState(false);

  const handleConsoleSelect = () => {
    setSelectModalProps({
      title: '',
      dataList: ['Vipa', 'PS5', 'Xbox', 'PC'],
      onSelect: setSelectedConsole,
    });
    setModalVisible(true);
  };

  const handleChallengeTypeSelect = () => {
    setSelectModalProps({
      title: '',
      dataList: ['FUT 1vs1', 'Real Team 1vs1'],
      onSelect: setSelectedChallengeType,
    });
    setModalVisible(true);
  };

  const handleGameModeSelect = () => {
    setSelectModalProps({
      title: '',
      dataList: ['Test 1', 'Test 2'],
      onSelect: setSelectedGameMode,
    });
    setModalVisible(true);
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (selectedConsole && selectedGameMode && selectedChallengeType) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [selectedConsole, selectedGameMode, selectedChallengeType]);

  return (
    <SafeAreaView
      style={[styles.safeArea, {opacity: modalVisible == true ? 0.8 : 1}]}>
      <ScrollView  contentContainerStyle={{flexGrow:1,paddingBottom:100}} showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.gameHeader}>
          <Icons.GameWhiteFillIcon height={23} width={23} />
          <Text style={styles.gameHeaderText}>Start Game</Text>
        </View>
        <TouchableOpacity
          onPress={toggleExpand}
          activeOpacity={0.8}
          style={styles.rulesContainer}>
          <View style={styles.rulesContent}>
            <Icons.RulesIcon />
            <Text style={styles.rulesText}>Rules</Text>
          </View>
          {expanded ? (
            <View style={styles.expandIcon}>
              <Icons.UpArrow />
            </View>
          ) : (
            <Icons.DownArrow />
          )}
        </TouchableOpacity>
        {expanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.expandedText}>
              Challenge Rules only applicable when entering E-FOOT ARENA Game
              Mode Please go through it carefully.
            </Text>
            <Text style={styles.expandedBoldText}>
              Type: Friendly | Half Length: 6 Mins
            </Text>
            <Text style={styles.expandedBoldText}>
              Game Speed: Normal | Squad Type: Online
            </Text>
            <View style={styles.soccerAidContainer}>
              <Text style={styles.soccerAidText}>SOCCER AID NOT ALLOWED</Text>
            </View>
            <Text style={styles.expandedText}>
              It’s each player’s responsibility to check the connection and
              latency of its opponent
            </Text>
            <View style={styles.drawContainer}>
              <Text style={styles.drawText}>
                ** In case of draw: Extra time and penalties if needed
              </Text>
            </View>
          </View>
        )}
        <Text style={styles.instructionsText}>
          Select your preferences and play!
        </Text>
        <View style={styles.preferencesContainer}>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Console</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleConsoleSelect}
              style={styles.preferenceSelector}>
              <Text style={styles.preferenceSelectorText}>
                {selectedConsole || 'select'}
              </Text>
              <Icons.DownArrow />
            </TouchableOpacity>
          </View>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Game Mode</Text>
            <TouchableOpacity
              onPress={handleGameModeSelect}
              activeOpacity={0.8}
              style={styles.preferenceSelector}>
              <Text style={styles.preferenceSelectorText}>
                {selectedGameMode || 'select'}
              </Text>
              <Icons.DownArrow />
            </TouchableOpacity>
          </View>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Select challenge type</Text>
            <TouchableOpacity
              onPress={handleChallengeTypeSelect}
              activeOpacity={0.8}
              style={styles.preferenceSelector}>
              <Text style={styles.preferenceSelectorText}>
                {selectedChallengeType || 'select'}
              </Text>
              <Icons.DownArrow />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.goButton,
              {backgroundColor: allSelected == true ? '#4A00E8' : '#98959A'},
            ]}>
            <Text
              style={[
                styles.goButtonText,
                {color: allSelected == true ? '#ffffff' : '#767171'},
              ]}>
              Lets Go!
            </Text>
          </View>
        </View>
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
export default Game;
