import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  howToPlayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical:15
  },
  howToPlayHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 24,
    color: '#D1CBD8',
  },
  bannerImage: {
    height: 215,
    width: '100%',
    borderRadius: 8,
  },
  overlayContainer: {
    width: '100%',
    height: 215,
    borderRadius: 8,
    backgroundColor: '#261D37',
    position: 'absolute',
    opacity: 0.9,
    borderWidth: 0.5,
    borderColor: '#4A00E8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  overlayTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 32,
    color: '#D1CBD8',
    width:"56%",
  },
  overlaySubtitle: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    width:"51%"
  },
  sectionContainer: {
    paddingTop: 20,
    gap: 20,
  },
  sectionTitle: {
    fontFamily: 'Play-Regular',
    fontSize: 20,
    color: '#D1CBD8',
  },
  sectionImage: {
    height: 165,
    width: '100%',
    borderRadius: 8,
  },
  sectionContent: {
    padding: 20,
    backgroundColor: '#261D37',
    borderRadius: 8,
    gap:20
  },
  sectionText: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  stepsContainer: {
    padding: 20,
    backgroundColor: '#261D37',
    borderRadius: 8,
    gap: 15,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 5,
  },
  stepNumber: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
  stepText: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    width: '78%',
  },
  gameModeContainer: {
    gap: 8,
  },
  gameModeTitle: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#FFFFFF',
  },
  gameModeText: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  rewardTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  rewardText: {
    fontFamily: 'Play-Regular',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
