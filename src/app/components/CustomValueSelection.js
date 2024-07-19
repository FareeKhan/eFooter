import { Animated, Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icons from '../assets/icons'

const {height,width} = Dimensions.get('screen')

const CustomValueSelection = ({title,data,value,setValue}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const [selectedItem, setSelectedItem] = useState(null);
    const renderItem = ({ item }) => {
      const isSelected = selectedItem === item;
  
      return (
        <TouchableOpacity
          onPress={() => {
            setSelectedItem(item);
            setValue(item);
            setModalVisible(false)
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
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{title}</Text>
                <TouchableOpacity
                    onPress={()=>setModalVisible(true)}
                    activeOpacity={0.8}
                    style={styles.selectContainer}>
                    <Text style={styles.selectLabel}>{value}</Text>
                    <Icons.DownArrow />
                </TouchableOpacity>
            </View>
            <View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}

                >
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", Top: 100, marginHorizontal: -15 }}>
                        {modalVisible ? (
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
                        <View style={[styles.cardContainer, title === 'Country' && { height: height / 1.4 }]}>

                            <View style={styles.header}>
                                <Text style={styles.headerText}>{title}</Text>
                                <TouchableOpacity onPress={()=> setModalVisible(false)} activeOpacity={0.8}>
                                    <Icons.CrossIcon />
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={index => index.toString()}
                                contentContainerStyle={{ paddingTop: 10 }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default CustomValueSelection

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 20,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Play-Bold',
    },
    selectContainer: {
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#D1CBD8',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    selectLabel: { color: '#FFFFFF', fontFamily: 'Play-Regular' },


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

})


