import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import ValuesTable from 'components/ValuesTable'
import FloatContent from 'components/FloatContent'
import BoxFloat from 'components/BoxFloat'
const { height } = Dimensions.get('window')

export default function Geral({ route }) {

  return (
    <View style={{backgroundColor: '#FFFFFF', height: height}}>
      <Header name={route.name} />
      <View style={style.container}>
          <View style={style.tableContent}>
            <ValuesTable />
          </View>
          <View style={style.tableContent}>
            <FloatContent title='Resumos das Entregas'>
                <View style={style.contentFloat}>
                    <View style={style.boxContent}>
                          <BoxFloat name="Aceitas" value={15} />
                          <BoxFloat name="Rejeitas" value={5} />
                          <BoxFloat name="Total" value={20} />
                    </View>
                </View>
            </FloatContent>
          </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 40
    },
    tableContent: {
        marginTop: 30
    },
    contentFloat: {
        marginTop: 30
    },
    boxContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})