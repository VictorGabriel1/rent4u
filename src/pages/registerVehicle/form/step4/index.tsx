import { RegisterVehicleFormProps } from "..";
import { Column, Title } from "../../../../components/global/steps";
import { MaterialIcons } from "@expo/vector-icons";

export default function RegisterVehicleStep4({
  control,
  errors,
}: RegisterVehicleFormProps) {
  return (
    <>
      <Column>
        <MaterialIcons name="check-circle" size={100} color="#ad1818" />
        <Title>Veículo cadastrado com sucesso!</Title>
      </Column>
    </>
  );
}
