import styled from 'styled-components/native';

export const Container = styled.View`
  height: 160px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingRight: 20 },
  showsHorizontalScrollIndicator: false,  
})``;

export const TabItem = styled.View`
  width: 130px;
  height: 130px;
  background-color: rgba(0,0,0,0.9);
  border: 1px solid rgba(78,90,246,0.1);
  border-radius: 8px;
  margin-left: 8px;
  padding: 2px;
`;

export const TabText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Bold';
  margin-top: 95px;
`;

export const Title = styled.Text`
  font-family: "Roboto-Light";
  font-size: 20;
  margin-left: -5px;
  padding-left: 8px;
  color: #000;
`;