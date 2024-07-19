import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingBottom:100,
  },
  myProfileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 15,
  },
  myProfileHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  tournamentContainer: {
    paddingHorizontal: 6,
    backgroundColor: '#FFC1071F',
    paddingVertical: 4,
    borderRadius: 8,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tournamentCount: {
    fontFamily: 'Play-Bold',
    color: '#FFC107',
    fontSize: 15,
  },
  userBadgeContainer: {
    paddingVertical: 15,
    alignItems: 'center',
  
  },
  profileDetailsContainer: {
    position: 'absolute',
    height: 250,
    width: 200,
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileImage: {
    height:90,
    width:90
  },
  userName: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    width: '50%',
    textAlign: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileLinkContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#261D37',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A00E8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:44
  },
  profileLink: {
    width: '95%',
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#261D37',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btnText: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#D1CBD8',
  },
  expandedContent: {
    padding: 20,
    backgroundColor: '#261D37',
    marginTop: -12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  expandedTitle: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  profilePictureContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    opacity: 0.5,
  },
  editIcon: {
    position: 'absolute',
    bottom: '50%',
  },
  fileSizeInfo: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#FFC1071F',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  fileSizeText: {
    fontFamily: 'Play-Regular',
    fontSize: 12,
    color: '#FFC107',
  },
  inputGroup: {
    paddingTop: 15,
    gap: 10,
  },
  inputLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#D1CBD8',
  },
  secureInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1CBD8',
    paddingRight: 20,
  },
  input: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    height:40
  },
  wlRankInput:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1CBD8',
    borderRadius: 8,
    paddingVertical: 12,
  },
  wlRankText:{
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  saveBTn:{
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A00E8',
    borderRadius: 8,
    paddingVertical:15,
    width:"50%",
    alignSelf:"flex-end"
  },
  saveBTnText:{
    fontFamily: 'Lato-Black',
    fontSize: 14,
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
    top:'67%'
  },
  joinMatchBtn:{
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A00E8',
    borderRadius: 8,
    paddingVertical:10,
    width:"40%",
    alignSelf:"flex-end"
  },
  joinMatchBtnText:{
    fontFamily: 'Lato-Black',
    fontSize: 14,
    color: '#FFFFFF',
  },
  preferenceItem:{
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  preferenceText:{
    fontFamily: 'Play-Regular',
    fontSize: 17,
    color: '#D1CBD8',
    width:"83%"

  }
});
