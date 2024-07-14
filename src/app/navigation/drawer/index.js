import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  MyMatchesScreen,
  MyProfileScreen,
  ContactUsScreen,
  HowToPlayScreen,
  NotificationScreen,
} from '../../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation,DrawerActions} from '@react-navigation/native';
import BottomTabNavigation from '../bottomTab';
import ChatNavigator from '../chat';
import Icons from '../../assets/icons';

const DrawerContent = () => {
  const navigation = useNavigation();
  const [activeItem, setActiveItem] = useState(null);

  const handlePress = screenName => {
    navigation.navigate(screenName);
    setActiveItem(screenName);
  };

  const handleCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Icons.AppIcon height={47} width={47} />
          <Text style={styles.appName}>E-Foot.NL</Text>
        </View>
        <TouchableOpacity
          onPress={handleCloseDrawer}
          activeOpacity={0.8}>
          <Icons.CrossIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => handlePress('MyProfile')}
          activeOpacity={0.8}
          style={[
            styles.menuItem,
            activeItem === 'MyProfile' && styles.activeMenuItem,
          ]}>
          <Icons.UserRoundIcon />
          <Text style={styles.menuText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('MyMatches')}
          activeOpacity={0.8}
          style={[
            styles.menuItem,
            activeItem === 'MyMatches' && styles.activeMenuItem,
          ]}>
          <Icons.MatchesIcon />
          <Text style={styles.menuText}>My Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('ContactUs')}
          activeOpacity={0.8}
          style={[
            styles.menuItem,
            activeItem === 'ContactUs' && styles.activeMenuItem,
          ]}>
          <Icons.HeadPhoneIcon />
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('HowToPlay')}
          activeOpacity={0.8}
          style={[
            styles.menuItem,
            activeItem === 'HowToPlay' && styles.activeMenuItem,
          ]}>
          <Icons.QuestionIcon />
          <Text style={styles.menuText}>How to Play?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Terms Of Use - Privacy Policy</Text>
        <View style={styles.socialIconsContainer}>
          <Icons.YoutubeIcon />
          <Icons.TwitterIcon />
          <Icons.SmallMailIcon />
          <Icons.InstaIcon />
        </View>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'left',
      }}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="MyMatches"
        component={MyMatchesScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
        <Drawer.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{
            drawerItemStyle: {height: 0},
          }}
        />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="HowToPlay"
        component={HowToPlayScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#261D37',
    flex: 1,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#4A00E8',
    paddingVertical: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  appName: {
    fontFamily: 'Play-Bold',
    fontSize: 28,
    color: '#D1CBD8',
  },
  menuContainer: {
    paddingTop: 50,
    gap: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activeMenuItem: {
    borderColor: '#4A00E8',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  menuText: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
  },
  footerContainer: {
    gap: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
  },
  footerText: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
