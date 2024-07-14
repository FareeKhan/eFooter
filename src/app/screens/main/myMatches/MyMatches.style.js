import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  matchesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    gap: 7,
  },
  matchesHeaderTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  searchInputContainer: {
    backgroundColor: '#261D37',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    gap: 5,
    paddingVertical: 1,
    width: '80%',
  },
  searchInput: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
    width: '88%',
  },
  filterIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#261D37',
    paddingVertical: 15,
    width: '15%',
  },
  btnsContainer: {
    paddingVertical: 20,
  },
  btnContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#4A00E8',
  },
  btnText: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  matchContainer: {
    padding: 30,
    backgroundColor: '#261D37',
    borderRadius: 8,
    marginBottom: 20,
  },
  matchIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  gameLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#D1CBD8',
  },
  gameValue: {
    fontFamily: 'Play-Bold',
  },
  consoleLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#D1CBD8',
  },
  consoleValue: {
    fontFamily: 'Play-Bold',
  },
  gameIconInfo: {
    gap: 5,
  },
  gameInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  modeLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  modeValue: {
    fontFamily: 'Play-Bold',
  },
  typeLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  typeValue: {
    fontFamily: 'Play-Bold',
  },
  statusLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  statusValue: {
    fontFamily: 'Play-Bold',
  },
  challengeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  challengerProfile: {
    height: 30,
    width: 30,
  },
  challengeLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 12,
    color: '#D1CBD8',
  },
  challengeValue: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#D1CBD8',
  },
  gameInfo: {
    gap: 15,
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  accepterProfile: {
    height: 30,
    width: 30,
  },
  acceptLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 12,
    color: '#D1CBD8',
  },
  acceptValue: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#D1CBD8',
  },
  acceptBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#4A00E8',
    paddingHorizontal: 20,
    marginTop: 30,
    paddingVertical: 10,
  },
  acceptBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  btnsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
    width: '47%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#261D37',
  },
  cancelBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
  submitBtn: {
    borderWidth: 1,
    borderRadius: 8,
    width: '47%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#261D37',
    padding: 30,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#4A00E8',
    width: '100%',
  },
  modalHeader: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 18,
    color: '#D1CBD8',
  },
  uploadBtn: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#4A00E8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  proofNoteContainer: {
    backgroundColor: '#FFC1071F',
    borderRadius: 8,
    padding: 7,
  },
  proofNoteTextBold: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#FFC107B2',
  },
  scoreNoteContainer: {
    backgroundColor: '#FF48421F',
    borderRadius: 8,
    padding: 7,
    marginTop:20
  },
  scoreNoteTextBold: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#FF4842',
  },
  noteTextReg: {
    fontFamily: 'Play-Regular',
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
