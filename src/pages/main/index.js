import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/header'
import CardLarge from '../../components/cardLarge'
import ScrollCat from '../../components/scrollCategoria'
import ContainerBar from '../../components/barFooter'

import { Container, BarFooter, ContainerGlobal, Categoria } from './styles'

import Cervejas from '../../assets/images/Cervejas.jpeg'

export default function Main() {
  return (
    <ContainerGlobal>
      <Container>

        <StatusBar
          backgroundColor='rgba(78,90,246,1)'
          barStyle='light-content'
        />

        <Header />


        <CardLarge titulo='Promoções'/>

        <CardLarge titulo='Procure seu Produto'/>

        <Categoria> Categoria </Categoria>

        <ScrollCat 
          Image1={Cervejas} TextImg1='Cervejas1'
          Image2={Cervejas} TextImg2='Cervejas2'
          Image3={Cervejas} TextImg3='Cervejas3'
          Image4={Cervejas} TextImg4='Cervejas4'
          Image5={Cervejas} TextImg5='Cervejas5'/>

        <ScrollCat 
          Image1={Cervejas} TextImg1='Cervejas6'
          Image2={Cervejas} TextImg2='Cervejas7'
          Image3={Cervejas} TextImg3='Cervejas8'
          Image4={Cervejas} TextImg4='Cervejas9'
          Image5={Cervejas} TextImg5='Cervejas10'/>


      </Container>

      <BarFooter>
        <ContainerBar />
      </BarFooter>

    </ContainerGlobal>
  );
}
