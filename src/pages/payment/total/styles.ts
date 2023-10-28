import { styled } from "styled-components/native";

export const TableContainer = styled.View`
  display: flex;
  width: 100%;
`;

export const PaymentMethod = styled.View`
  border-bottom-width: 1px;
  border-color: #000;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 5px;
  margin-bottom: 20px;
`;

export const PaymentMethodText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: 800;
`;

export const PaymentCardContainer = styled.View`
  width: 100%;
  gap: 20px;
`;
