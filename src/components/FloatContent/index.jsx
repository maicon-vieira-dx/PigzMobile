import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import BoxFloat from 'components/BoxFloat'

export default function FloatContent({title, children}) {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 5, paddingRight: 5, borderRadius: 15}}>
        <View style={style.boxshadow}>
          <View style={style.container}>
            <Text style={style.titleContent}>{title}</Text>
            { children }
          </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {

    },
    boxshadow: {
        elevation: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderRadius: 15,
    },
    container: {
        margin: 15,

    },
    titleContent: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
})