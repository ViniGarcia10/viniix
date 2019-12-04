import styled from 'styled-components/native';

export const ContainerBar = styled.View`
  height: 46px;
  background-color: rgb(78,90,246);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageBar = styled.Image `
  justify-content: center;
  margin: 10px;
`;

export const BtnQrCode = styled.TouchableOpacity `
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-color: rgb(196,198,255);
  z-index: 2;
  bottom: 5;
  justify-content: center;
  align-items: center;
`;
