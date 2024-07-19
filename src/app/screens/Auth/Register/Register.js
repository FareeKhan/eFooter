import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SelectModal from '../../../components/SelectModal';
import Icons from '../../../assets/icons';
import { styles } from './Register.style';
import CustomValueSelection from '../../../components/CustomValueSelection';
import { CountryList, wlRankData } from '../../../constant/data';

const Register = () => {
  const [radio, setRadio] = useState(true);
  const [eye, setEye] = useState(true);

  const [country, setCountry] = useState('Select Country');
  const [wlRank, setWlRank] = useState('WL Rank');



  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.safeArea,]}>
      <View style={styles.backgroundTop}></View>
      <View style={styles.backgroundBottom}></View>
      <View style={styles.registerContainer}>
        <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : "height"} keyboardVerticalOffset={Platform.OS == 'ios' ? 80 : 0} >
          <ScrollView showsVerticalScrollIndicator={false}>

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
              <Text style={styles.playText}>PLAY FIFA WIN PRIZES 🎁 </Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Johndoe"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Johndoe@example.com"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View
                  style={[
                    styles.input,
                    {
                      paddingVertical: -8,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <TextInput
                    placeholder="**********"
                    placeholderTextColor={'#D1CBD8'}
                    style={{ color: '#FFFFFF' }}
                    secureTextEntry={eye === true ? true : false}
                  />
                  <TouchableOpacity onPress={() => setEye(!eye)}>
                    {eye === true ? (
                      <Icons.eyeoffIcon />
                    ) : (
                      <Icons.VisibilityIcon />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="john"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Doe"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Birth Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="mm/dd/yyyy"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>EA ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0000000000"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>E-sports Team</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Team E-Foot"
                  placeholderTextColor={'#D1CBD8'}
                />
              </View>
           


              <CustomValueSelection
                data={wlRankData}
                title={'WL Rank'}
                value={wlRank}
                setValue={setWlRank}


              />

              <CustomValueSelection
                data={CountryList}
                title={'Country'}
                value={country}
                setValue={setCountry}


              />
              <View style={styles.radioRow}>
                <Text style={styles.radioLabel}>Pro Player?</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.radioBtn, { opacity: radio == false ? 0.3 : 1 }]}
                  onPress={() => setRadio(!radio)}></TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setRadio(!radio)}
                  style={[
                    styles.radio,
                    { right: radio ? '2%' : '7%' },
                  ]}></TouchableOpacity>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.alreadyLoginText}>
                Already have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={styles.loginLink}>
                  Log in instead
                </Text>
              </Text>
              <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>
                  Note:{' '}
                  <Text style={{ fontFamily: 'Play-Regular' }}>
                    Players must have residence in any of the following
                    territories: Austria, Belgium, Bulgaria, Croatia, Cyprus,
                    Czech Republic, Denmark, Finland, France, Germany, Greece,
                    Hungary, Iceland, Ireland, Italy, Luxembourg, Malta,
                    Netherlands, Norway, Poland, Portugal, Romania, Slovakia,
                    Slovenia, Spain, Sweden, Switzerland, Türkiye, Ukraine, United
                    Kingdom.
                  </Text>
                </Text>
              </View>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      </View>
   
    </SafeAreaView>
  );
};

export default Register;
