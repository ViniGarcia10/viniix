import React, { Component } from 'react'

import { TitleCardLarge, ContainerCardLarge, Card } from './styles'

export class CardLarge extends Component {
  render() {
    return (
      <ContainerCardLarge>
        <TitleCardLarge> Titulo </TitleCardLarge>
        <Card />
      </ContainerCardLarge>

    )
  }
}

export default CardLarge
