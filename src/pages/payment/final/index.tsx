import { MaterialIcons } from "@expo/vector-icons";
import { Column, Title } from "../../../components/global/steps";
import { Container } from "../../../components/global/Container";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/customButton";
import { Wrapper } from "../../rentVehicle/rentVehicle/styles";

export default function PaymentFinal() {
  const { navigate } = useNavigation();
  return (
    <Container backgroundColor="#2E2C2C">
      <Wrapper>
        <Title></Title>
        <Column>
          <MaterialIcons name="check-circle" size={100} color="#ad1818" />
          <Title>Pagamento efetuado com sucesso!</Title>
        </Column>
        <CustomButton
          title="Finalizar"
          color="#ad1818"
          textColor="#fff"
          onPress={() => navigate("rentDate")}
        />
      </Wrapper>
    </Container>
  );
}
