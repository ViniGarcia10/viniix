import React, { Component } from 'react'

import { StyledHeader, StyledInfoHeader, StyledTextHeader, StyledLocalText } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons';

const local = 'Novo Horizonte do Oeste'

export class header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledInfoHeader>
          <StyledTextHeader>Você está em </StyledTextHeader>
          <StyledLocalText> {local}</StyledLocalText>
          <Icon name="place" size={18} />
        </StyledInfoHeader>
      </StyledHeader>
    )
  }
}

export default header
