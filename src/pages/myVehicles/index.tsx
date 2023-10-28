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
    name: "Chevrolet Onix - Auto/2022",
    car: "Branco - R$50,00/h - R$250,00/dia",
  },
  {
    name: "Hyundai HB20 - Auto/2020",
    car: "Vermelho - R$50,00/h - R$250,00/dia",
  },
];

export default function MyVehicles() {
  return (
    <Container backgroundColor="#2E2C2C">
      <CardsWrapper>
        {cars.map((item) => (
          <CardContainer key={item.name}>
            <PhotoContainer>
              <MaterialIcons name="directions-car" size={40} />
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
