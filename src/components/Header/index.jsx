import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import arrowBack from 'assets/arrow_back_black_24dp.png'

const { width, height } = Dimensions.get('window')

export default function Header({name}) {
  return (
    <View style={style.header}>
      <Image source={arrowBack} style={style.arrow} />
      <Text style={style.headerTitle}>{name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    header: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: height * .08,
    },
    arrow: {
        position: 'absolute',
        left: 20
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#222222'
    }
})