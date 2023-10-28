import { styled } from "styled-components/native";

export const CardsWrapper = styled.View`
  gap: 10px;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const CardContainer = styled.TouchableOpacity`
  background-color: #fff8;
  width: 95%;
  height: 60px;
  max-width: 500px;
  flex-direction: row;
  border-radius: 15px;
`;

export const PhotoContainer = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
  background-color: #fff7;
  border-radius: 15px;
`;

export const InfoContainer = styled.View`
  padding: 10px;
  width: 80%;
  justify-content: center;
`;

export const Name = styled.Text`
  color: #ad1818;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 14px;
`;
