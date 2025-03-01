import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingBottom:100
  },
  searchInputContainer: {
    backgroundColor: '#261D37',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    gap: 5,
    paddingVertical: 1,
    width: '63%',
  },
  searchInput: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
    width: '88%',
    height:50
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#261D37',
    paddingVertical: 15,
    width: '15%',
  },
  challengeHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
  },
  challengeHeadingText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  iconsContainersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inviteText: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    paddingTop: 25,
    paddingBottom: 15,
  },
  challengeMainContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  challengeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  onlineIndicatorContainer: {
    backgroundColor: '#000',
    borderRadius: 50,
    height: 17,
    width: 17,
    position: 'absolute',
    bottom: 0,
    right: -5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  onlineIndicator: {
    backgroundColor: '#33D49D',
    borderRadius: 50,
    height: 14,
    width: 14,
  },
  profileName: {
    fontFamily: 'Play-Bold',
    fontSize: 17,
    color: '#D1CBD8',
  },
  challengeBtn: {
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  challengeBtnText: {
    fontFamily: 'Lato-Black',
    fontSize: 14,
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
  yesBtn: {
    borderWidth: 1,
    borderColor: '#4A00E8',
    borderRadius: 8,
    width: '47%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A00E8',
  },
  yesBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
});
