import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import google from 'assets/logo_googleg_48dp.png'
export default function ButtonGoogle({children}) {
  return (
    <TouchableOpacity style={style.buttonGoogle}>
            <Image source={google} style={style.logoGoogle}/>
            <Text style={style.textButton}>{children}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    buttonGoogle: {
        borderWidth: 1,
        borderColor: '#9F9F9F',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentButton: {
        position: 'relative',
        flexDirection: 'row',
    },
    textButton: {
        fontSize: 18,
        fontWeight: '600'
    },
    logoGoogle: {
        position: 'absolute',
        left: 13
    }
})