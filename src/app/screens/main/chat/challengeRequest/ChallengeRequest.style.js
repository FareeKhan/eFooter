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
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#261D37',
    paddingVertical: 15,
    width: '15%',
  },
  headerLabelsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 15,
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
  headerLabelText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8'
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
    gap: 8,
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Play-Bold',
    fontSize: 17,
    color: '#D1CBD8',
  },
  statusBtn: {
    borderRadius: 8,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  statusBtnText: {
    fontFamily: 'Lato-Black',
    fontSize: 14,
  },
  actionBtn: {
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  actionBtnText: {
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
});
