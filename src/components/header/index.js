import React, { Component } from 'react'
import { Image } from 'react-native'

import PointIcon from '../../assets/images/point.png'
import { StyledHeader, StyledInfoHeader, StyledTextHeader, StyledLocalText } from './styles'

const local = 'Novo Horizonte do Oeste'

export class header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledInfoHeader>
          <StyledTextHeader>Você está em</StyledTextHeader>
          <StyledLocalText> {local} </StyledLocalText>
          <Image source={PointIcon} />
        </StyledInfoHeader>
      </StyledHeader>
    )
  }
}

export default header
