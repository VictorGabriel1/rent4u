import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Container } from "../../components/global/Container";
import { Row } from "../../components/global/steps";
import { Box, BoxContainer, BoxText } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <Container backgroundColor="#2E2C2C">
      <BoxContainer>
        <Row>
          <Box onPress={() => navigate("registerVec")}>
            <MaterialIcons name="directions-car" color="#ad1818" size={100} />
            <BoxText>Cadastar Veículo</BoxText>
          </Box>
          <Box onPress={() => navigate("rentVec")}>
            <MaterialIcons name="calendar-today" color="#ad1818" size={85} />
            <BoxText>Alugar Veículo</BoxText>
          </Box>
        </Row>
        <Row>
          <Box onPress={() => navigate("myVehicles")}>
            <MaterialCommunityIcons name="garage" color="#ad1818" size={100} />
            <BoxText>Meus Veículos</BoxText>
          </Box>
          <Box onPress={() => navigate("myRents")}>
            <BoxText>Veículos Alugados</BoxText>
            <MaterialCommunityIcons
              name="car-clock"
              color="#ad1818"
              size={90}
              style={{ marginLeft: 15, marginBottom: 10 }}
            />
          </Box>
        </Row>
      </BoxContainer>
    </Container>
  );
}
