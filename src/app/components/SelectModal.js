import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import icons from '../assets/icons';

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
  const renderItem = ({item}) => {
    const isSelected = selectedItem === item;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          onSelect(item);
        }}
        activeOpacity={0.8}
        style={[
          {marginHorizontal: 30},
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
    <Modal
      style={styles.modalContainer}
      visible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}>
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
          contentContainerStyle={{paddingTop: 10}}
        />
      </View>
    </Modal>
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
    width: '100%',
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
