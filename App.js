import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Routes from 'routes/route';
import 'react-native-gesture-handler';
import { UserProvider } from 'common/context/User';

export default function App(){

  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Routes />
    </SafeAreaView>
  );
}

