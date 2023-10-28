import CustomInput from "../../../../components/CustomInput";
import { RegisterVehicleFormProps } from "..";
import { Row, Title } from "../../../../components/global/steps";

export default function RegisterVehicleStep2({
  control,
  errors,
}: RegisterVehicleFormProps) {
  return (
    <>
      <Title>Informações do Veículo</Title>
      <Row>
        <CustomInput
          control={control}
          error={errors?.carModel?.message}
          type="text"
          name="carModel"
          textColor="#fff"
          label="Modelo do Carro:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={75}
        />
        <CustomInput
          control={control}
          error={errors?.carYear?.message}
          type="text"
          name="carYear"
          textColor="#fff"
          label="Ano:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={25}
        />
      </Row>
      <Row>
        <CustomInput
          control={control}
          error={errors?.carColor?.message}
          type="text"
          name="carColor"
          textColor="#fff"
          label="Cor:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={75}
        />
        <CustomInput
          control={control}
          error={errors?.carPlate?.message}
          type="text"
          name="carPlate"
          textColor="#fff"
          label="Placa:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={25}
        />
      </Row>
      <CustomInput
        control={control}
        error={errors?.renavam?.message}
        type="text"
        name="renavam"
        textColor="#fff"
        label="Renavam:"
        labelColor="#ad1818"
        borderBottomColor="#ad1818"
        errorMessageColor="#000"
      />
      <Row>
        <CustomInput
          control={control}
          error={errors?.priceHour?.message}
          name="priceHour"
          type="text"
          textColor="#fff"
          label="Preço por hora:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
        <CustomInput
          control={control}
          error={errors?.priceDay?.message}
          name="priceDay"
          type="text"
          textColor="#fff"
          label="Preço por dia:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
      </Row>
    </>
  );
}
