import { styled } from "styled-components/native";

export const BoxContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const Box = styled.TouchableOpacity`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: #fff7;
  margin: 20px 0px;
  align-items: center;
  justify-content: center;
`;

export const BoxText = styled.Text`
  position: absolute;
  bottom: 10px;
  font-size: 15px;
`;
