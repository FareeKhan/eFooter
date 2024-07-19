import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import icons from '../assets/icons';
const {height,width} = Dimensions.get('screen')

const SelectModal = ({
  visible,
  onBackButtonPress,
  onBackdropPress,
  title,
  dataList,
  onClose,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          onSelect(item);
        }}
        activeOpacity={0.8}
        style={[
          { marginHorizontal: 30 },
          isSelected && {
            backgroundColor: '#352A4B',
            borderWidth: 1,
            borderColor: '#4A00E8',
            paddingLeft: 10,
            borderRadius: 10,
            marginHorizontal: 20,
          },
        ]}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (



<View>

<Modal
      visible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",Top:100,marginHorizontal:-15}}>
      {visible ? (
        <Animated.View
          style={{
            backgroundColor: '#00000099',
            position: 'absolute',
            height: height * 100,
            width: width,
            top: 0,
          }}></Animated.View>
      ) : (
        <></>
      )}
        <View style={styles.cardContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
              <icons.CrossIcon />
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataList}
            renderItem={renderItem}
            keyExtractor={index => index.toString()}
            contentContainerStyle={{ paddingTop: 10 }}
          />
        </View>
      </View>
    </Modal>
</View>

  );
};

export default SelectModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#261D37',
    paddingVertical: 20,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#4A00E8',
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  headerText: {
    fontFamily: 'Play-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Play-Bold',
    fontSize: 14,
    color: '#D1CBD8',
    paddingVertical: 12,
  },
});
