import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    // height: '12%',
    backgroundColor: '#261D37',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  userAvatar: {
    height: 44,
    width: 44,
    borderRadius: 50,
  },
  onlineIndicatorContainer: {
    backgroundColor: '#000',
    borderRadius: 50,
    height: 10,
    width: 10,
    position: 'absolute',
    bottom: 0,
    right: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  onlineIndicator: {
    backgroundColor: '#33D49D',
    borderRadius: 50,
    height: 7,
    width: 7,
  },
  userName: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  userStatus: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#33D49D',
  },
  messageInputContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageInput: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#261D37',
    borderRadius: 8,
    width: '83%',
  },
  messageInputLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  messageTextInput: {
    fontFamily: 'Play-Regular',
    fontSize: 15,
    color: '#fff',
    width: '70%',
  },
  messageInputRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sendButton: {
    width: '13%',
    borderRadius: 50,
    backgroundColor: '#4A00E8',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgsContainer: {
    padding:20
  },
  msgContainer: {
    alignItems: 'flex-end',
    gap: 10,
  },
  msgerAvatar: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  msg:{
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  }
});
