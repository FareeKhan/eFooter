import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icons from '../assets/icons';

const AppHeader = () => {
  const navigation = useNavigation();
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('nl');
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleLanguageSelectorPress = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  };

  const handleLogoutModalPress = () => {
    setIsLogoutModalVisible(!isLogoutModalVisible);
  };

  const handleLanguageOptionPress = language => {
    setSelectedLanguage(language);
    setIsLanguageSelectorOpen(false);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.8}>
          <Icons.DrawerIcon />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <View style={styles.winsContainer}>
            <Text style={styles.winsText}>0 - 5 WINS</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            activeOpacity={0.8}>
            <Icons.BellIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLanguageSelectorPress}
            activeOpacity={0.8}>
            {selectedLanguage === 'en' ? <Icons.USFlag /> : <Icons.FlagNL />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogoutModalPress}
            activeOpacity={0.8}>
            <Image
              source={require('../assets/images/pngs/usersProfile/1.png')}
              style={styles.userAvatar}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      {isLanguageSelectorOpen && (
        
        <View style={styles.languageSelector}>
            <TouchableOpacity
              onPress={() => handleLanguageOptionPress('nl')}
              style={styles.languageOption}>
              <Icons.FlagNL />
              <Text style={styles.languageOptionText}>Dutch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLanguageOptionPress('en')}
              style={[styles.languageOption, { paddingVertical: 8 }]}>
              <Icons.USFlag />
              <Text style={styles.languageOptionText}>English</Text>
            </TouchableOpacity>
        </View>
      )}
      {isLogoutModalVisible && (
        <View style={styles.logoutModal}>
          <Image
            source={require('../assets/images/pngs/usersProfile/1.png')}
            style={styles.logoutAvatar}
            resizeMode="cover"
          />
          <Text style={styles.logoutUserName}>Daniel Marvin</Text>
          <TouchableOpacity
            onPress={handleLogoutModalPress}
            activeOpacity={0.8}
            style={styles.logoutButton}>
            <Icons.LogoutIcon />
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  winsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#140055',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A00E8',
  },
  winsText: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#D1CBD8',
  },
  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#4A00E8',
  },
  languageSelector: {
    backgroundColor: '#261D37',
    position: 'absolute',

    zIndex: 100,
    borderRadius: 8,
    top: '75%',
    right: '15%',
    paddingVertical: 15,
    width: 136,
    alignSelf: 'flex-end',
    gap: 10,
  },
  languageOption: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#352A4B',
    paddingVertical: 3,
  },
  languageOptionText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
  logoutModal: {
    paddingHorizontal: 30,
    backgroundColor: '#261D37',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 20,
    position: 'absolute',
    zIndex: 1,
    top: '95%',
  },
  logoutAvatar: {
    height: 64,
    width: 64,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#4A00E8',
  },
  logoutUserName: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#D1CBD8',
    paddingTop: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingTop: 20,
  },
  logoutButtonText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
});
