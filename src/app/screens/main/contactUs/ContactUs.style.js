import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  contactUsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },
  contactUsHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  mailIconContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  sendBTn: {
    marginVertical: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
  },
  sendBTnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  inputContainer: {
    gap: 10,
    paddingTop: 15,
  },
  label: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  textInput: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
  },
});
