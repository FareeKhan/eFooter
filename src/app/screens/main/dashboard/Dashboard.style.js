import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  dashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 40,
    paddingBottom: 20,
  },
  dashboardHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  challengeOverviewContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#261D37',
    borderRadius: 8,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  challengeHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  rankIconContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  statsContainer: {
    paddingVertical: 17,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: '#919EAB1F',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statsLabelsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  statsLabelGroup: {
    gap: 16,
  },
  statsLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 17,
    color: '#D1CBD8',
  },
  statsValuesGroup: {
    gap: 10,
  },
  winValue: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#229A16',
  },
  lossValue: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#FF4842',
  },
  matchValue: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  playerValue: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  circularProgressText: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#D1CBD8',
  },
  coinsContainer: {
    marginVertical: 20,
    paddingHorizontal: 17,
    paddingVertical: 30,
    backgroundColor: '#261D37',
    borderRadius: 8,
  },
  coinsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinsHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  coinsHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  coinsBadge: {
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FFC1071F',
    paddingHorizontal: 10,
  },
  coinsBadgeText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#FFC107',
  },
  slidersContainer: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  sliderContainer: {
    gap: 20,
  },
  slider: {
    height: 111,
  },
  sliderThumb: {
    height: 0,
    width: 0,
  },
  sliderTrack: {
    width: 30,
  },
  minTrack: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  maxTrack: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  sliderLabel: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#D1CBD8',
  },
  sliderMaxRadius: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  sliderMinRadius: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  matchesContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#261D37',
    borderRadius: 8,
  },
  matchesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  matchesHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  matchItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '40%',
  },
  matchItemGameName: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    width: '70%',
  },
  matchItemOpponent: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
    width: '35%',
  },
  matchItemStatus: {
    fontFamily: 'Play-Regular',
    fontSize: 14,
    color: '#54D62C',
    width: '12%',
  },
  matchItemWin: {
    color: '#54D62C',
  },
  matchItemLose: {
    color: '#FF4842',
  },
  timelineContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 8,
    backgroundColor: '#261D37',
  },
  timelineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timelineHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timelineHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 20,
    color: '#D1CBD8',
  },
  timelineShowAll: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
    textDecorationLine: 'underline',
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 20,
  },
  timelineIconContainer: {
    alignItems: 'center',
    gap: 6,
    paddingBottom:6
  },
  timelineIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: '#1890FF1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineLine: {
    height: 80,
    borderColor: '#1890FF7A',
    borderLeftWidth: 1,
  },
  timelineTextContainer: {
    gap: 5,
  },
  timelineTitle: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  timelineDescription: {
    fontFamily: 'Play-Regular',
    fontSize: 16,
    color: '#D1CBD8',
  },
  timelineTime: {
    fontFamily: 'Play-Regular',
    fontSize: 12,
    color: '#919EAB',
    width: '72%',
  },
  matchesListContainer: {
    paddingTop: 40,
  },
  matchesListHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  matchesListHeaderText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#D1CBD8',
  },
  timelineListContainer: {
    paddingTop: 30,
  },
});
