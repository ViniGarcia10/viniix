import React, { Component } from 'react'
import { Container, TabsContainer, TabItem, TabText, FundoImg, BarraText } from './styles'

import { TouchableOpacity, Alert } from 'react-native'

export class scrollCategoria extends Component {
  render() {
    return (
      <Container>
        <TabsContainer>
          <TouchableOpacity>
            <TabItem>
              <FundoImg source={this.props.Image1} />
              <BarraText>
                <TabText> {this.props.TextImg1} </TabText>
              </BarraText>
            </TabItem>
          </TouchableOpacity>

          <TouchableOpacity>
            <TabItem>
              <FundoImg source={this.props.Image2} />
              <BarraText>
                <TabText> {this.props.TextImg2} </TabText>
              </BarraText>
            </TabItem>
          </TouchableOpacity>

          <TouchableOpacity>
            <TabItem>
              <FundoImg source={this.props.Image3} />
              <BarraText>
                <TabText> {this.props.TextImg3} </TabText>
              </BarraText>
            </TabItem>
          </TouchableOpacity>

          <TouchableOpacity>
            <TabItem>
              <FundoImg source={this.props.Image4} />
              <BarraText>
                <TabText> {this.props.TextImg4} </TabText>
              </BarraText>
            </TabItem>
          </TouchableOpacity>

          <TouchableOpacity>
            <TabItem>
              <FundoImg source={this.props.Image5} />
              <BarraText>
                <TabText> {this.props.TextImg5} </TabText>
              </BarraText>
            </TabItem>
          </TouchableOpacity>
        </TabsContainer>
      </Container>
    )
  }
}

export default scrollCategoria
