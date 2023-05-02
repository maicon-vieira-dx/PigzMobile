import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BoxFloat({name, value}) {
  return (
    <View style={style.boxFloat}>
      <View style={style.container}>
        <Text style={style.textMedium}>{name}</Text>
        <Text style={style.textBold}>{value}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    boxFloat: {
        height: 95,
        width: 95,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#F0F0F0',
        marginHorizontal: 3,
        marginBottom: 10
    },
    container: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textMedium: {
        fontSize: 15,
        fontWeight: '300',
        color: '#9F9F9F',
    },
    textBold: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 10
    },
})