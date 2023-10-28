import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/customButton";
import { Container } from "../../../components/global/Container";
import {
  InputsContainer,
  Row,
  StepText,
} from "../../../components/global/steps";
import { Wrapper } from "../../rentVehicle/rentVehicle/styles";
import { useForm } from "react-hook-form";
import CustomInput from "../../../components/CustomInput";
import { PaymentCardContainer } from "../total/styles";

export default function PaymentCard() {
  const { navigate } = useNavigation();
  const { control } = useForm();
  return (
    <Container backgroundColor="#2E2C2C">
      <Wrapper>
        <StepText>Passo 5 de 5</StepText>
        <PaymentCardContainer>
          <CustomInput
            control={control}
            label="Numero do cartão"
            labelColor="#fff"
            editable={false}
            type="text"
            name="email"
            placeholder="E-mail"
            backgroundColor="#fff"
            errorMessageColor="#000"
            widthResponsive={100}
            value="XXXX-XXXX-XXXX-XXXX"
            borderBottomColor="#000"
          />
          <Row style={{ marginLeft: 10 }}>
            <CustomInput
              control={control}
              label="Data de validade"
              labelColor="#fff"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={45}
              value="XX/XX"
            />
            <CustomInput
              control={control}
              label="CVV"
              labelColor="#fff"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={45}
              value="XXX"
            />
          </Row>
          <CustomInput
            control={control}
            label="Nome no cartão"
            labelColor="#fff"
            editable={false}
            type="text"
            name="email"
            placeholder="E-mail"
            backgroundColor="#fff"
            errorMessageColor="#000"
            widthResponsive={100}
            value="XXXX-XXXX-XXXX-XXXX"
            borderBottomColor="#000"
          />
        </PaymentCardContainer>
        <CustomButton
          title="Continuar"
          color="#ad1818"
          textColor="#fff"
          onPress={() => navigate("paymentFinal")}
        />
      </Wrapper>
    </Container>
  );
}
