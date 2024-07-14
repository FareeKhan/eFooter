import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../../assets/icons';
import {styles} from './ForgotPassword.style';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundTop}></View>
      <View style={styles.backgroundBottom}></View>
      <View style={styles.forgotPasswordContainer}>
        <ScrollView>
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
            <Text style={styles.forgotPasswordText}>Forgot Password? 🔐</Text>
            <Text
              style={{
                fontFamily: 'Play-Regular',
                fontSize: 16,
                color: '#D1CBD8',
                paddingTop: 20,
              }}>
              Enter your email and we will send you all the instructions to rest
              your password
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Your Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={'#D1CBD8'}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.forgotButton}>
              <Text style={styles.forgotButtonText}>Send reset link</Text>
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.loginLink}>
              Back to login
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
