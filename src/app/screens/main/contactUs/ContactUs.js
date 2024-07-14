import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/AppHeader';
import Icons from '../../../assets/icons';
import {styles} from './ContactUs.style';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [msg, setMsg] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (name && mail && msg) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [name, mail, msg]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader/>
        <View style={styles.contactUsHeader}>
          <Icons.HeadPhoneIcon />
          <Text style={styles.contactUsHeaderText}>Contact Us</Text>
        </View>
        <View>
          <View style={styles.mailIconContainer}>
            <Icons.MailIcon />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              placeholder="Enter your name"
              style={styles.textInput}
              placeholderTextColor={'#D1CBD8'}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.textInput}
              placeholderTextColor={'#D1CBD8'}
              value={mail}
              onChangeText={text => setMail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Message</Text>
            <TextInput
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              placeholder="Write your message here...."
              style={styles.textInput}
              placeholderTextColor={'#D1CBD8'}
              value={msg}
              onChangeText={text => setMsg(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.sendBTn,
              {backgroundColor: isFormFilled ? '#4A00E8' : '#98959A'},
            ]}>
            <Text style={styles.sendBTnText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;
