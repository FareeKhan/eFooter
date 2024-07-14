import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../assets/icons';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Auth', {
        screen: 'Login',
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Icons.AppIcon />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#261D37',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
