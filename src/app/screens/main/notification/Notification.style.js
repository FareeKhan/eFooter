import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingBottom:120
  },
  notificationTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
    paddingVertical: 15,
  },
  searchInputContainer: {
    backgroundColor: '#261D37',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    gap: 5,
    paddingVertical: 1,
    width: '100%',
  },
  searchInput: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
    width: '88%',
  },
  notificationContainer: {
    backgroundColor: '#261D37',
    borderRadius: 8,
    marginTop: 15,
    paddingVertical: 15,
  },
  newTextTitle: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  earlierTextTitle: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
    padding: 15,
  },
  newMsgsContainer: {
    backgroundColor: '#352A4B',
  },
  msgContainer: {
    padding: 15,
  },
  msgRow: {
    flexDirection: 'row',
    gap: 15,
  },
  msgIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#1890FF1F',
    height: 40,
    width: 40,
  },
  msgTextContainer: {
    gap: 5,
  },
  msgTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
  msgDescription: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  msgTime: {
    fontFamily: 'Play-Regular',
    fontSize: 12,
    color: '#D1CBD8',
  },
});
