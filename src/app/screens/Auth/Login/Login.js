import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../../assets/icons';
import { styles } from './Login.style';

const Login = () => {
  const navigation = useNavigation();
  const [eye, setEye] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundTop}></View>
      <View style={styles.backgroundBottom}></View>
      <View style={[styles.loginContainer]}>
        <ScrollView  contentContainerStyle={{flex:1}} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <View style={styles.appInfo}>
                <Icons.AppIcon height={38} width={48} />
                <Icons.AppName />
              </View>
              <View style={styles.utilityIcons}>
                <Icons.FlagNL />
                <Icons.SunIcon />
              </View>
            </View>
            <Text style={styles.welcomeText}>Welcome! Log In to Start .</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email/Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email/username"
                placeholderTextColor={'#D1CBD8'}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View
                style={[
                  styles.input,
                  {
                    // paddingVertical: -8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                  },
                ]}>
                <TextInput
                  placeholder="**********"
                  placeholderTextColor={'#D1CBD8'}
                  style={{ color: '#FFFFFF', width: "90%" }}
                  secureTextEntry={eye === true ? true : false}
                />
                <TouchableOpacity onPress={() => setEye(!eye)}>
                  {eye === true ? (
                    <Icons.eyeoffIcon width={20} height={20} />
                  ) : (
                    <Icons.VisibilityIcon />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.forgotPassword}>
              Forgot password?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Drawer', {
                  screen: 'BottomTabNavigation',
                })
              }
              activeOpacity={0.8}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.newAccountText}>
              New on our platform?{' '}
              <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.createAccountLink}>
                Create a new account
              </Text>
            </Text>
            <View style={styles.socialLoginContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonText}>Login with</Text>
                <Icons.GoogleIcon />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonText}>Login with</Text>
                <Icons.FacebookIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomText}>
              Play FIFA and WIN PRIZES - Play like a PRO 💙
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
