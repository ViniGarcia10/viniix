import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { },
  showsVerticalScrollIndicator: false,  
})``;

export const BarFooter = styled.View`
  height: 46px;
`;

export const ContainerGlobal = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(241,245,255);
`;

export const Categoria = styled.Text`
  font-family: 'Roboto-Light';
  font-size: 20px;
  margin-left: 4px;
  padding:0;
`;