import CustomInput from "../../../../components/CustomInput";
import { RegisterVehicleFormProps } from "..";
import { Row, Title } from "../../../../components/global/steps";

export default function RegisterVehicleStep1({
  control,
  errors,
}: RegisterVehicleFormProps) {
  return (
    <>
      <Title>Informações Pessoais</Title>
      <CustomInput
        control={control}
        error={errors?.name?.message}
        type="text"
        name="name"
        textColor="#fff"
        label="Nome Completo:"
        labelColor="#ad1818"
        borderBottomColor="#ad1818"
        errorMessageColor="#000"
      />
      <Row>
        <CustomInput
          control={control}
          error={errors?.rg?.message}
          type="text"
          name="rg"
          textColor="#fff"
          label="RG:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
        <CustomInput
          control={control}
          error={errors?.cnh?.message}
          type="text"
          name="cnh"
          textColor="#fff"
          label="CNH:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
      </Row>
      <CustomInput
        control={control}
        error={errors?.address?.message}
        type="text"
        name="address"
        textColor="#fff"
        label="Endereço:"
        labelColor="#ad1818"
        borderBottomColor="#ad1818"
        errorMessageColor="#000"
      />
      <Row>
        <CustomInput
          control={control}
          error={errors?.district?.message}
          type="text"
          name="district"
          textColor="#fff"
          label="Bairro:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
        <CustomInput
          control={control}
          error={errors?.city?.message}
          type="text"
          name="city"
          textColor="#fff"
          label="Cidade:"
          labelColor="#ad1818"
          borderBottomColor="#ad1818"
          errorMessageColor="#000"
          widthResponsive={50}
        />
      </Row>
    </>
  );
}
