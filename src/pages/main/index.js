import React from 'react';
import { View, SafeAreaView, Text, StatusBar, StyleSheet, Image } from 'react-native';

import Header from '../../components/header'
import CardLarge from '../../components/cardLarge'
import ScrollProd from '../../components/scrollProdutos'

import { Container } from './styles'

export default function Main() {
  return (
    <SafeAreaView>
      <Container>
      
        <StatusBar
          backgroundColor='rgba(78,90,246,1)'
          barStyle='light-content'
        />

        <Header />


        <CardLarge />

        <CardLarge />

        <ScrollProd />

        <ScrollProd />

      </Container>
      
    </SafeAreaView>
  );
}
