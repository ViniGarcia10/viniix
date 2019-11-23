import React from 'react';
import { View, SafeAreaView, Text, StatusBar, StyleSheet, Image } from 'react-native';

import Header from '../components/header'
import PromoHeader from '../components/promoHeader'

export default function Home() {
  return (
    <SafeAreaView>

      <StatusBar 
        backgroundColor='rgba(78,90,246,1)'
        barStyle='light-content'
      />
      
      <Header />

      <PromoHeader /> 

    </SafeAreaView>
  );
}
