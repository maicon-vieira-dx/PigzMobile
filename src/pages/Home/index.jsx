import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'
import HomeBottomTabs from 'routes/Home/bottomTabs'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
        <HomeBottomTabs />
    </SafeAreaView>
  )
}