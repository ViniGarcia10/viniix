import React, { Fragment } from 'react';
import { Button, StyleSheet, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ButtonQrCodeScan from './components/BtnQrCodeScan'

import QrCodeScan from './pages/qrCodeScan'
import TabBottom from './components/TabBottom'

const styles = StyleSheet.create({
  btnContainer: {
    height: 85,
    width: 75,
    zIndex: 3,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    bottom: 3
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MyModal')}
          style={styles.btnContainer}
        >
          <ButtonQrCodeScan />
        </TouchableOpacity>
        <TabBottom />
      </Fragment>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <QrCodeScan>
        <View>
          <Button onPress={() => this.props.navigation.goBack()} title="Voltar" />
        </View>
      </QrCodeScan>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        height: 0,
      },

    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    headerMode: 'none',
    mode: "modal"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
