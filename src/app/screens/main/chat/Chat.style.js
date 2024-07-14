import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
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
    height:44
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#261D37',
    paddingVertical: 15,
    width: '15%',
  },
  chatHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
  },
  chatHeadingText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  iconsContainersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  globalChatBtnContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#4A00E8',
    marginTop: 15,
    paddingVertical: 13,
    borderRadius: 8,
  },
  globalChatBtnText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  chatmainContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userProfileImage: {
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
  profileInfoContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  profileName: {
    fontFamily: 'Play-Bold',
    fontSize: 17,
    color: '#D1CBD8',
  },
  profileMsg: {
    fontFamily: 'Play-Regular',
    fontSize: 15,
    color: '#D1CBD8',
  },
  messageInfoContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  messageTime: {
    fontFamily: 'Play-Regular',
    fontSize: 13,
  },
  unreadBadgeContainer: {
    backgroundColor: '#33D49D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 22,
    width: 22,
    alignSelf: 'flex-end',
  },
  unreadBadgeText: {
    fontFamily: 'Play-Regular',
    fontSize: 13,
    color: '#0B0711',
  },
});
