import React, { Component } from 'react'

import { BtnQrCode } from './styles'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

export class BtnQrCodeScan extends Component {
  render() {
    return (
      <BtnQrCode>
        <Icon1 name="qrcode-scan" size={30} />
      </BtnQrCode>
    )
  }
}

export default BtnQrCodeScan
