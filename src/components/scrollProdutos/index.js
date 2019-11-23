import React, { Component } from 'react'
import { Container, TabsContainer, TabItem, TabText, Title } from './styles'

export class scrollProdutos extends Component {
  render() {
    return (
      <Container>
        <Title> Para beber </Title>
        <TabsContainer>
          <TabItem>
            <TabText> TAB 1 </TabText>
          </TabItem>

          <TabItem>
            <TabText> TAB 1 </TabText>
          </TabItem>

          <TabItem>
            <TabText> TAB 1 </TabText>
          </TabItem>

          <TabItem>
            <TabText> TAB 1 </TabText>
          </TabItem>
          
        </TabsContainer>
      </Container>
    )
  }
}

export default scrollProdutos
