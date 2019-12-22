import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ContainerGlobal, Topo, Lojas, ItemList, TextList, Street } from './styles'

export class Place extends React.Component {
  render() {
    return (
      <ContainerGlobal>
        <Topo>
          <Lojas> LOJAS </Lojas>
        </Topo>
        <Container>
          <FlatList
            data={[
              { key: 'Novo Horizonte do Oeste' }
            ]}
            renderItem={({ item }) =>
              <TouchableOpacity>
                <ItemList>
                  <TextList>
                    <Icon name="place" size={18} color='blue' />
                    {item.key}
                  </TextList>

                  {/* <TextListDistance>
                    FEATURE DE DISTANCIA EM RELAÇÃO AO USUÁRIO!
                  </TextListDistance> */}

                  <Street> Rua Janiópolis,4543 </Street>
                  
                </ItemList>
              </TouchableOpacity>
            }
          />
        </Container>

      </ContainerGlobal>
    )
  }
}