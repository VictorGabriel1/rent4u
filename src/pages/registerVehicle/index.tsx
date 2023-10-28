import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/global/Container";
import {
  FormContainer,
  InputsContainer,
  StepText,
} from "../../components/global/steps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterVehicleForm from "./form";
import CustomButton from "../../components/customButton";
import * as yup from "yup";

const RegisterVehicleValidationSchema = yup.object().shape({
  name: yup.string().min(3, "Nome inválido!").required("Campo obrigatório!"),
  rg: yup.string().length(9, "RG Inválido!").required("Campo obrigatório!"),
  cnh: yup.string().length(10, "CNH Inválida!").required("Campo obrigatório!"),
  address: yup.string().required("Campo obrigatório!"),
  district: yup.string().required("Campo obrigatório!"),
  city: yup.string().required("Campo obrigatório!"),
  carModel: yup.string().required("Campo obrigatório!"),
  carYear: yup.string().required("Campo obrigatório!"),
  carColor: yup.string().required("Campo obrigatório!"),
  carPlate: yup.string().required("Campo obrigatório!"),
  renavam: yup.string().required("Campo obrigatório!"),
  priceHour: yup.string().required("Campo obrigatório!"),
  priceDay: yup.string().required("Campo obrigatório!"),
});

export type RegisterVehicleSchema = yup.InferType<
  typeof RegisterVehicleValidationSchema
>;

export default function RegisterVehicle() {
  const navigation = useNavigation();
  const [step, setStep] = useState<number>(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterVehicleSchema>({
    defaultValues: {
      name: "Nara Caproni",
      rg: "112223334",
      cnh: "1112223334",
      address: "Av. Lins de Vasconcelos, 1222",
      district: "Aclimação",
      city: "São Paulo - SP",
      carModel: "Chevrolet Onix LT 1.0 Manual",
      carYear: "2022",
      carColor: "Preto",
      carPlate: "QN8S79",
      renavam: "24085488108",
      priceHour: "R$30,00",
      priceDay: "R$250,00",
    },
    resolver: yupResolver(RegisterVehicleValidationSchema),
    mode: "onSubmit",
  });

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);

  function handleContinue() {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  }

  return (
    <Container backgroundColor="#2E2C2C">
      <FormContainer>
        {step < 4 && <StepText>Passo {step} de 3</StepText>}
        <InputsContainer>
          <RegisterVehicleForm control={control} errors={errors} step={step} />
        </InputsContainer>
        <CustomButton
          title={step === 4 ? "Finalizar" : "Continuar"}
          color="#ad1818"
          textColor="#fff"
          onPress={() => {
            step === 4
              ? // ? handleSubmit(handleContinue)
                setStep(1)
              : setStep((prev) => prev + 1);
          }}
        />
      </FormContainer>
    </Container>
  );
}
