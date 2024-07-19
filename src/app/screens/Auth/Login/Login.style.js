import { Dimensions, Platform, StyleSheet } from "react-native";
const {height} = Dimensions.get('screen')
export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    backgroundTop: {
      flex: 1,
      backgroundColor: '#4513ef',
    },
    backgroundBottom: {
      flex: 3.2,
      backgroundColor: '#000',
    },
    loginContainer: {
      position: 'absolute',
      width: '95%',
      height: height/1.2,
      bottom: Platform.OS == 'ios' ? '9%':'3%',
      left: '2.5%',
      backgroundColor: '#261D37',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#4A00E8',
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 45,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    appInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    utilityIcons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
    },
    welcomeText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontFamily:"Play-Bold",
      paddingTop: 30,
    },
    inputContainer: {
      paddingTop: 20,
    },
    label: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily:'Play-Bold'
    },
    input: {
      borderColor: '#D1CBD8',
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 14,
      color: '#FFFFFF',
      fontFamily:'Play-Regular',
      height:48,
    },
    forgotPassword: {
      color: '#FFFFFF',
      fontSize: 14,
      textDecorationLine: 'underline',
      textAlign: 'right',
      paddingTop: 10,
      fontFamily:'Play-Bold'
    },
    loginButton: {
      marginTop: 15,
      backgroundColor: '#4A00E8',
      padding: 14,
      borderRadius: 10,
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
      fontFamily:'Play-Bold'
    },
    newAccountText: {
      color: '#FFFFFF',
      fontSize: 14,
      paddingVertical: 20,
      textAlign: 'center',
      fontFamily:'Play-Regular'
    },
    createAccountLink: {
      textDecorationLine: 'underline',
      fontFamily:'Play-Bold',
    },
    socialLoginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    socialLoginButton: {
      width: '48%',
      borderWidth: 1,
      borderColor: '#D1CBD8',
      paddingVertical: 10,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 5,
    },
    socialLoginButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily:'Lato-Black'
    },
    bottomBox:{
     flex: 1,
      bottom:0,
      justifyContent:"flex-end",
      alignItems:"center",
      marginBottom:30 
    },
    bottomText: {
      color: '#FFFFFF',
      fontFamily:'Play-Bold',


    },
  });