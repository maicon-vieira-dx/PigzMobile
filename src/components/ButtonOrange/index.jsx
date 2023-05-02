import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function ButtonOrange({children, onClick}) {
  return (
    <TouchableOpacity style={style.buttonOrange} onPress={() => onClick()}>
        <LinearGradient
            colors={['rgb(250, 100, 30)', 'rgb(255, 136, 31)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}} style={style.button}>
                    <Text style={style.textButton}>{children}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    button: {
        borderRadius: 15,
        paddingLeft: 30,
        paddingRight: 30,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontWeight: '500',
        color: '#fff',
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 25,
        color: '#FFF',
        fontWeight: 'bold'
      }
  })