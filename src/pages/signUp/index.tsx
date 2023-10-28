import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Content } from "./styles";
import { Container } from "../../components/global/Container";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  name: yup.string().min(3, "Nome inválido!").required("Campo obrigatório!"),
  email: yup
    .string()
    .email("Insira um e-mail valido!")
    .required("Campo obrigatório!"),
  password: yup
    .string()
    .min(8, "Minimo 8 caracteres!")
    .required("Campo obrigatorio!"),
  passwordConfirm: yup
    .string()
    .min(8)
    .required("Campo obrigatorio!")
    .oneOf([yup.ref("password")], "As senhas não são iguais!"),
  cpf: yup.string().length(11, "CPF Inválido!").required("Campo obrigatório!"),
  bDay: yup
    .string()
    .length(10, "Data Inválida!")
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Data Inválida!"
    )
    .required("Campo obrigatório!"),
  cnh: yup.string().length(10, "CPF Inválido!").required("Campo obrigatório!"),
});

type LoginSchema = yup.InferType<typeof LoginValidationSchema>;

export default function SignUp() {
  const { navigate } = useNavigation();
  const { signUp } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: {
      name: "Nara Caproni",
      email: "nara@email.com",
      password: "senha123",
      passwordConfirm: "senha123",
      bDay: "11/11/2001",
      cpf: "11122233344",
      cnh: "1112223334",
    },
    resolver: yupResolver(LoginValidationSchema),
    mode: "onSubmit",
  });

  async function handleSignUp(data: LoginSchema) {
    const { name, email, password, bDay, cnh, cpf } = data;
    console.log(data);
    await signUp({ name, email, password, bDay, cnh, cpf }).then((res) =>
      console.log(res)
    );
  }

  return (
    <Container backgroundColor="#ad1818">
      <Content>
        <CustomInput
          control={control}
          error={errors?.email?.message}
          type="text"
          name="name"
          placeholder="Nome"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.email?.message}
          type="text"
          name="email"
          placeholder="E-mail"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.email?.message}
          type="text"
          name="cpf"
          placeholder="CPF"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.email?.message}
          type="text"
          name="cnh"
          placeholder="CNH"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.email?.message}
          type="text"
          name="bDay"
          placeholder="Data de nascimento"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.password?.message}
          type="password"
          name="password"
          placeholder="Senha"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <CustomInput
          control={control}
          error={errors?.password?.message}
          type="password"
          name="passwordConfirm"
          placeholder="Confirme sua senha"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />

        <CustomButton
          title="Cadastrar"
          color="#000"
          textColor="#fff"
          onPress={handleSubmit(handleSignUp)}
        />
      </Content>
    </Container>
  );
}
