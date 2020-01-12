import * as React from 'react';
import { YellowBox, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import { Main } from '../../pages/main'
import { Place } from '../../pages/place'
import { Menu } from '../../pages/menu'
import { Shop } from '../../pages/shop'

YellowBox.ignoreWarnings([
  'Virtualized'
]);

export default class ComponentRoute extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'homeScreen', icon:"home" },
        { key: 'placeScreen', icon:"map-marker" },
        { key:'retornoScreen'},
        { key: 'shopScreen', icon: "basket" },
        { key: 'menuScreen', icon: "menu", size: 80 },
      ]
    }
  }

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    homeScreen: Main,
    placeScreen: Place,
    retornoScreen: Retorno,
    shopScreen: Shop,
    menuScreen: Menu,
  });

  render() {
    return (
      <BottomNavigation
        shifting={false}
        activeColor='white'
        inactiveColor= 'black'
        barStyle={{height: 45, backgroundColor: 'rgb(78,90,246)', justifyContent: "center"}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    )
  }
}

class Retorno extends React.Component {
  render(){
    return(
      <React.Fragment/>
    )
  }
}