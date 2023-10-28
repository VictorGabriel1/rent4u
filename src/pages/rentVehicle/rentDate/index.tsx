import { useMemo, useState } from "react";
import { InputText } from "../../../components/CustomInput/styles";
import { Container } from "../../../components/global/Container";
import {
  Column,
  FormContainer,
  StepText,
  Title,
} from "../../../components/global/steps";
import { Calendar } from "react-native-calendars";
import CustomButton from "../../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { Flex } from "./styles";

export default function RentDate() {
  const { navigate } = useNavigation();
  const initDate = new Date().toISOString().split("T")[0];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const marked = useMemo(
    () => ({
      ...selectedDays.reduce((acc: { [key: string]: any }, selectedDay) => {
        acc[selectedDay] = {
          selected: true,
          selectedColor: "#222222",
          selectedTextColor: "red",
        };
        return acc;
      }, {}),
    }),
    [selectedDays]
  );
  return (
    <Container backgroundColor="#2E2C2C">
      <StepText>Passo 1 de 5</StepText>
      <Flex>
        <Column>
          <Title>Buscar por endereço</Title>
          <InputText
            placeholder="Av. Lins de Vasconcelos, 1222"
            backgroundColor="#fff"
            textColor="#fff"
            borderRadius={20}
          />
        </Column>
        <Column>
          <Title>Escolher data:</Title>
          <Calendar
            hideExtraDays
            minDate={initDate}
            markingType="multi-period"
            markedDates={marked}
            style={{
              margin: 0,
            }}
            onDayPress={(day) => {
              if (marked[day.dateString]) {
                setSelectedDays(
                  selectedDays.filter(
                    (selectedDay) => selectedDay !== day.dateString
                  )
                );
              } else {
                setSelectedDays([...selectedDays, day.dateString]);
              }
            }}
          />
        </Column>
        <CustomButton
          title="Buscar"
          color="#ad1818"
          textColor="#fff"
          onPress={() => navigate("rentList")}
        />
      </Flex>
    </Container>
  );
}
