import { Dimensions, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../components/global/Container";
import { Row, StepText, Title } from "../../../components/global/steps";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import {
  CardContainer,
  Description,
  InfoContainer,
  Name,
  PhotoContainer,
} from "../rentList/styles";
import { VehicleInfo, Wrapper } from "./styles";
import CustomInput from "../../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/customButton";

export default function RentVehicle() {
  const { navigate } = useNavigation();
  const { control } = useForm();
  return (
    <Container backgroundColor="#2E2C2C">
      <Wrapper>
        <StepText>Passo 3 de 5</StepText>
        <CardContainer onPress={() => navigate("rentVehicle")}>
          <PhotoContainer>
            <MaterialIcons name="person" size={40} />
          </PhotoContainer>
          <InfoContainer>
            <Name>Nara Caproni</Name>
            <Description>
              Chevrolet Onix - Manual/2022 - Branco R$50,00/h - R$250,00/dia
            </Description>
          </InfoContainer>
        </CardContainer>
        <Carousel
          loop
          width={330}
          height={200}
          // autoPlay={true}
          data={[
            require("../../../../assets/onix_1.jpg"),
            require("../../../../assets/onix_2.jpg"),
            require("../../../../assets/onix_3.jpg"),
          ]}
          scrollAnimationDuration={1000}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          renderItem={({ item }) => (
            <Image style={{ width: 330, height: 200 }} source={item} />
          )}
        />
        <VehicleInfo>
          <Row>
            <CustomInput
              control={control}
              label="Modelo do Veículo:"
              labelColor="#000"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={75}
              value="Chevrolet Onix - Manual/2022"
              borderBottomColor="#000"
            />
            <CustomInput
              control={control}
              label="Ano:"
              labelColor="#000"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={25}
              value="2022"
              borderBottomColor="#000"
            />
          </Row>
          <Row>
            <CustomInput
              control={control}
              label="Cor do Veículo:"
              labelColor="#000"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={65}
              value="Branco"
              borderBottomColor="#000"
            />
            <CustomInput
              control={control}
              label="Placa:"
              labelColor="#000"
              editable={false}
              type="text"
              name="email"
              placeholder="E-mail"
              backgroundColor="#fff"
              errorMessageColor="#000"
              widthResponsive={35}
              value="QE7Q78"
              borderBottomColor="#000"
            />
          </Row>
          <CustomInput
            control={control}
            label="Renavam:"
            labelColor="#000"
            editable={false}
            type="text"
            name="email"
            placeholder="E-mail"
            backgroundColor="#fff"
            errorMessageColor="#000"
            widthResponsive={100}
            value="XXXXXXXXXXX"
            borderBottomColor="#000"
          />
        </VehicleInfo>
        <CustomButton
          title="Continuar"
          color="#ad1818"
          textColor="#fff"
          onPress={() => navigate("paymentTotal")}
        />
      </Wrapper>
    </Container>
  );
}
