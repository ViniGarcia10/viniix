import React from 'react';
import { View, SafeAreaView, Text, StatusBar, StyleSheet, Image } from 'react-native';
import PointIcon from '../assets/images/point.png'

export default function Home() {
  const local = 'Novo Horizonte do Oeste'
  return (
    <SafeAreaView>

      <StatusBar 
        backgroundColor='rgba(78,90,246,1)'
        barStyle='light-content'
      />

      <View style={styles.header}> 
        <View style={styles.infoHeader}>
          <Text style={styles.textHeader}>Você está em</Text>
          <Text style={styles.localText}> { local } </Text>
          <Image source={PointIcon}/>
        </View>
      </View>

      <View style={styles.bodyPromo}>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: 'rgb(29,251,58)',
    height: 135
  },

  infoHeader: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 90,
    height: 34,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  localText: {
    fontFamily: 'Roboto-Bold'
  },

  textHeader: {
    fontFamily: 'Roboto-Light'
  },

  bodyPromo: {
    backgroundColor: 'red',
    height: 98,
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 7
  }

});
