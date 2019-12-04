import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  margin-bottom: 20px;
  border-radius: 38px;

`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingRight: 20},
  showsHorizontalScrollIndicator: false, 
})``;

export const TabItem = styled.View`
  width: 130px;
  height: 130px;
  border: 1px solid rgba(78,90,246,0.5);
  border-radius: 8px;
  margin-left: 8px;
`;


export const FundoImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const TabText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Roboto-Bold';
  margin-left: 3px;
`;

export const BarraText = styled.View`
  margin-top: 95px;
  background-color: rgba(0,0,0,0.3);
  height: 20px;
  width: 100%;
  border: 1px solid rgba(78,90,246,0.5);
  border-radius: 8px;
  bottom: 0;
  position: absolute;
`;

