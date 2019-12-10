import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import { Main } from './pages/main'
import { Place } from './pages/place'
import { QrCodeScan } from './pages/qrCodeScan'
import { Menu } from './pages/menu'
import { Shop } from './pages/shop'
import ButtonQrCodeScan from './components/BtnQrCodeScan'

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const myIcon1 = () => <Icon name="place" size={25} />;

const myIcon2 = () => <Icon name="home" size={25} />;

const myIcon3 = () => <ButtonQrCodeScan />;

const myIcon4 = () => <Icon name="shopping-cart" size={25} />;

const myIcon5 = () => <Icon1 name="menu" size={25} />;


export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'homeScreen', icon: myIcon2 },
      { key: 'placeScreen', icon: myIcon1 },
      { key: 'qrCodeScreen', icon: myIcon3 },
      { key: 'shopScreen', icon: myIcon4 },
      { key: 'menuScreen', icon: myIcon5 },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    homeScreen: Main,
    placeScreen: Place,
    qrCodeScreen: QrCodeScan,
    shopScreen: Shop,
    menuScreen: Menu,
  });

  render() {
    return (
      <BottomNavigation
        
        shifting={false}
        barStyle={{ height: 46, backgroundColor: 'rgb(78,90,246)', paddingTop: 0, paddingLeft:0 }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}