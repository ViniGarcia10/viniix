import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})``;

export const ContainerGlobal = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(255,255,255);
`;

export const Topo = styled.SafeAreaView`
  height: 40px;
  background-color: rgb(78,90,244);
  border: solid 1px rgb(50,80,240);
  justify-content: center;
  align-items: center;
`;

export const Lojas = styled.Text`
   font-family: 'Roboto-bold';
   font-size: 20px;
   color: #fff; 
 `;

export const ItemList = styled.SafeAreaView`
  height: 60px;
  width: 350px;
  background-color: rgb(255,255,255);
  border-Bottom-Color: rgb(142,142,146);
  border-Bottom-Width: 1px;
  padding-top: 5px;
  padding-bottom: 65px;
  margin-left: 5px;
 `;

export const TextList = styled.Text`
  font-family: 'Roboto-bold';
  font-size: 22px;
  color: #000; 
  margin-left: 8px;
  align-items: center;
`;


// export const TextListDistance = styled.Text`
//   font-family: 'Roboto-Light';
//   align-items: center;
//   font-size: 15px;
//   color: #888; 
//   left: 30px;
// `;

export const Street = styled.Text`
  font-family: 'Roboto-bold';
  font-size: 15px;
  color: rgba(0,0,0,0.7); 
  margin-top: 5px;
  margin-left: 25px;
  padding-bottom: 5px;
  align-items: center;
`;
