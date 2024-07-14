import {Dimensions, Platform, StyleSheet} from 'react-native';
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
  registerContainer: {
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
    paddingVertical: 45,
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
  playText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Play-Bold',
    paddingTop: 30,
  },
  inputContainer: {
    paddingTop: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Play-Bold',
  },
  input: {
    borderColor: '#D1CBD8',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    paddingVertical: 8,
    color: '#FFFFFF',
    fontFamily: 'Play-Regular',
    height:48
  },
  registerButton: {
    backgroundColor: '#4A00E8',
    padding: 14,
    borderRadius: 10,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Play-Bold',
  },
  alreadyLoginText: {
    color: '#FFFFFF',
    fontSize: 14,
    paddingVertical: 20,
    textAlign: 'center',
    fontFamily: 'Play-Regular',
  },
  loginLink: {
    textDecorationLine: 'underline',
    fontFamily: 'Play-Bold',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  radioLabel: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  radioBtn: {
    paddingHorizontal: 24,
    backgroundColor: '#4A00E8',
    paddingVertical: 13,
    borderRadius: 50,
  },
  radio: {
    padding: 9,
    backgroundColor: '#261D37',
    borderRadius: 50,
    position: 'absolute',
  },
  bottomContainer: {
    marginTop: 40,
    backgroundColor: '#1890FF1F',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  bottomText: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#1890FF',
  },
  selectContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D1CBD8',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  selectLabel: {color: '#FFFFFF', fontFamily: 'Play-Regular'},
});
