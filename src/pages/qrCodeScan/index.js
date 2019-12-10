import React, { Component } from 'react'
import { Text } from 'react-native'

import { Container, ContainerGlobal } from './styles'

export class QrCodeScan extends Component {
  render() {
    return (
      <ContainerGlobal>
        <Container>
          <Text>QR CODE SCAN</Text>
        </Container>

      </ContainerGlobal>
    )
  }
}

export default QrCodeScan
