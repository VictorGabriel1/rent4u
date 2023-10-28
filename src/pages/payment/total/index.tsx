import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/customButton";
import { Container } from "../../../components/global/Container";
import { Column, Row, StepText, Title } from "../../../components/global/steps";
import { InfoContainer } from "../../rentVehicle/rentList/styles";
import { VehicleInfo, Wrapper } from "../../rentVehicle/rentVehicle/styles";
import { PaymentMethod, PaymentMethodText, TableContainer } from "./styles";

export default function PaymentTotal() {
  const { navigate } = useNavigation();
  return (
    <Container backgroundColor="#2E2C2C">
      <Wrapper>
        <StepText>Passo 4 de 5</StepText>
        <Title>Total dos serviços:</Title>
        <TableContainer>
          <Row>
            <Title>Total:</Title>
            <Title>R$250,00</Title>
          </Row>
          <Row>
            <Title>Total dos dias contratados:</Title>
            <Title>R$200,00</Title>
          </Row>
          <Row>
            <Title>Valor do seguro obrigatório:</Title>
            <Title>R$30,00</Title>
          </Row>
          <Row>
            <Title>Outras taxas:</Title>
            <Title>R$20,00</Title>
          </Row>
        </TableContainer>
        <VehicleInfo>
          <PaymentMethod>
            <PaymentMethodText>Escolha a forma de pagamento</PaymentMethodText>
          </PaymentMethod>
          <PaymentMethod>
            <Image source={require("../.././../../assets/cartao.png")} />
            <PaymentMethodText>Cartao de Crédito</PaymentMethodText>
            <Image source={require("../.././../../assets/radio_checked.png")} />
          </PaymentMethod>
          <PaymentMethod>
            <Image source={require("../.././../../assets/pix.png")} />
            <PaymentMethodText>Pix</PaymentMethodText>
            <Image source={require("../.././../../assets/radio.png")} />
          </PaymentMethod>
          <PaymentMethod>
            <Image source={require("../.././../../assets/boleto.png")} />
            <PaymentMethodText>Boleto Bancário</PaymentMethodText>
            <Image source={require("../.././../../assets/radio.png")} />
          </PaymentMethod>
          <CustomButton
            title="Continuar"
            color="#ad1818"
            textColor="#fff"
            onPress={() => navigate("paymentCard")}
          />
        </VehicleInfo>
      </Wrapper>
    </Container>
  );
}
