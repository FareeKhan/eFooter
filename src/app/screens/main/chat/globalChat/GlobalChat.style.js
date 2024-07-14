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
