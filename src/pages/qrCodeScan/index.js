import React, { Component } from 'react'
import { RNCamera, CameraStatus } from 'react-native-camera'
import { View, Text } from 'react-native'

export class QrCodeScan extends Component {

  state = {
    barcodesDetectado: '',
  }

  barcodeRecognized = (result) => this.setState({
    barcodesDetectado : result.barcodes[0].data
  });

  render() {
    console.log(this.state.barcodesDetectado)
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1
        }}

        onGoogleVisionBarcodesDetected={this.barcodeRecognized}
      >
        <View>
          <Text>
            {this.state.barcodesDetectado}
          </Text>
        </View>
      </RNCamera>
    )
  }
}
export default QrCodeScan