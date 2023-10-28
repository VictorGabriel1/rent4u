import { styled } from "styled-components/native";

export const StepText = styled.Text`
  color: #ad1818;
  font-size: 16px;
  font-weight: 800;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ad1818;
`;

export const FormContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 100px;
`;

export const InputsContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  gap: 20px;
`;

export const Row = styled.View`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  align-items: center;
`;
