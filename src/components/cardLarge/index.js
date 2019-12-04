import React, { Component } from 'react'

import { TitleCardLarge, ContainerCardLarge, Card } from './styles'
import { TouchableOpacity } from 'react-native'

export class CardLarge extends Component {
  render() {
    return (
      <TouchableOpacity>
        <ContainerCardLarge>
          <TitleCardLarge> {this.props.titulo} </TitleCardLarge>
          <Card />
        </ContainerCardLarge>
      </TouchableOpacity>

    )
  }
}

export default CardLarge
