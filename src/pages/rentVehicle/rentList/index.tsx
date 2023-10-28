import { Container } from "../../../components/global/Container";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StepText, Title } from "../../../components/global/steps";
import {
  CardContainer,
  CardsWrapper,
  Description,
  InfoContainer,
  Name,
  PhotoContainer,
} from "./styles";

const cars = [
  {
    name: "Nara Caproni",
    car: "Chevrolet Onix - Manual/2022 - Branco - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Ana Carolina",
    car: "Hyundai HB20 - Auto/2020 - Vermelho - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Victor Gabriel",
    car: "Pegout 208 - Manual/2021 - Cinza - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Renato Augusto",
    car: "Chevrolet Tracker - Manual/2015 - Branco - R$50,00/h - R$250,00/dia",
  },
  {
    name: "André Lima",
    car: "Volkswagen Gol - Auto/2018 - Branco - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Matheus Sousa",
    car: "Chevrolet Onix - Auto/2014 - Branco - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Rodrigo Ferreira",
    car: "Chevrolet Onix - Manual/2021 - Preto - R$50,00/h - R$250,00/dia",
  },
];

export default function RentList() {
  const { navigate } = useNavigation();

  return (
    <Container backgroundColor="#2E2C2C">
      <StepText style={{ marginBottom: 30 }}>Passo 2 de 5</StepText>
      <CardsWrapper>
        {cars.map((item) => (
          <CardContainer
            key={item.name}
            onPress={() => navigate("rentVehicle")}
          >
            <PhotoContainer>
              <MaterialIcons name="person" size={40} />
            </PhotoContainer>
            <InfoContainer>
              <Name>{item.name}</Name>
              <Description>{item.car}</Description>
            </InfoContainer>
          </CardContainer>
        ))}
      </CardsWrapper>
    </Container>
  );
}
