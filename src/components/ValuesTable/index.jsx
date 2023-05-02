import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import eyes from 'assets/eye.png'
export default function ValuesTable() {
  return (
        <LinearGradient
        colors={['rgb(250, 100, 30)', 'rgb(255, 136, 31)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}} style={style.table}>
            <View style={style.container}>
                <View style={style.box1}>
                    <Text style={style.textValues}>Ganhos do dia</Text>
                    <Text style={style.textTitle}>R$ 150</Text>
                </View>
                <View style={style.box2}>
                    <Text style={style.textDate}>29/07</Text>
                    <Image source={eyes} />
                </View>
            </View>
        </LinearGradient>
  )
}

const style = StyleSheet.create({
    table: {
        borderRadius: 15
    },
    container: {
        margin: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    box1: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    box2: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    textValues: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '300'
    },
    textTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginVertical: 10
    },
    textDate: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
        marginBottom: 20
    }
})