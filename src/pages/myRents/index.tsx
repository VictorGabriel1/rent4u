import { Container } from "../../components/global/Container";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CardContainer,
  CardsWrapper,
  Description,
  InfoContainer,
  Name,
  PhotoContainer,
} from "../rentVehicle/rentList/styles";

const cars = [
  {
    name: "Nara Caproni",
    car: "Chevrolet Onix - Manual/2022 - Branco - R$50,00/h - R$250,00/dia - 21/07/23",
  },
  {
    name: "Victor Gabriel",
    car: "Pegout 208 - Manual/2021 - Cinza - R$50,00/h - R$250,00/dia - 01/11/21",
  },
  {
    name: "André Lima",
    car: "Volkswagen Gol - Auto/2018 - Branco - R$50,00/h - R$250,00/dia - 15/10/23",
  },
];

export default function MyRents() {
  return (
    <Container backgroundColor="#2E2C2C">
      <CardsWrapper>
        {cars.map((item) => (
          <CardContainer key={item.name}>
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
