import React, { Component } from 'react'
import { ContainerBar, ImageBar, BtnQrCode } from './styles'
import { TouchableOpacity } from 'react-native'

import Home from '../../assets/images/home.png'
import Point from '../../assets/images/pointBar.png'
import QrCode from '../../assets/images/qrcode-scan.png'
import ShopCar from '../../assets/images/shopping-car.png'
import Menu from '../../assets/images/menu.png'


export class barFooter extends Component {
  render() {
    return (
      <ContainerBar>
        <TouchableOpacity>
          <ImageBar source={Home} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBar source={Point} />
        </TouchableOpacity>
        <BtnQrCode >
          <ImageBar source={QrCode} />
        </BtnQrCode>
        <TouchableOpacity>
          <ImageBar source={ShopCar} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBar source={Menu} />
        </TouchableOpacity>
      </ContainerBar>
    )
  }
}

export default barFooter
