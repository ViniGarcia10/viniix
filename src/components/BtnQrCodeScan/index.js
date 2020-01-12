import React, { Component } from 'react'

import { BtnQrCode, ContainerBtnQrCode } from './styles'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

class BtnQrCodeScan extends Component {
  render() {
    return (
      <ContainerBtnQrCode>
        <BtnQrCode >
          <Icon1 name="qrcode-scan" size={35} />
        </BtnQrCode>
      </ContainerBtnQrCode>
    )
  }
}

export default BtnQrCodeScan
