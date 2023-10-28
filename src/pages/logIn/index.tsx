import { useContext } from "react";
import { Image } from "react-native";
import { useForm } from "react-hook-form";
import { Content, ForgetPasswordLink, SignUpLink } from "./styles";
import { Container } from "../../components/global/Container";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import DefaultCheckBox from "../../components/defaultCheckBox";
import CustomButton from "../../components/customButton";
import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail valido!")
    .required("Campo obrigatorio!"),
  password: yup
    .string()
    .min(8, "Minimo 8 caracteres!")
    .required("Campo obrigatorio!"),
  connect: yup.boolean().required(),
});

type LoginSchema = yup.InferType<typeof LoginValidationSchema>;

export default function LogIn() {
  const { navigate } = useNavigation();
  const { logIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "nara@email.com",
      password: "senha123",
      connect: false,
    },
    resolver: yupResolver(LoginValidationSchema),
    mode: "onSubmit",
  });

  function handleLogin(data: LoginSchema) {
    const { email, password } = data;
    console.log(data);
    logIn({ email: data.email, password: data.password });
  }

  return (
    <Container backgroundColor="#ad1818">
      <Content>
        <Image source={require("../../../assets/logo.png")} />
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
          error={errors?.password?.message}
          type="password"
          name="password"
          placeholder="Senha"
          backgroundColor="#fff"
          errorMessageColor="#000"
        />
        <DefaultCheckBox
          control={control}
          name="connect"
          placeholder="Mantenha me conectado: "
        />
        <CustomButton
          title="Conectar"
          color="#000"
          textColor="#fff"
          onPress={handleSubmit(handleLogin)}
        />
        <ForgetPasswordLink>Esqueci minha senha</ForgetPasswordLink>
        <SignUpLink onPress={() => navigate("signUp")}>
          Não tem uma conta? Cadastre-se
        </SignUpLink>
      </Content>
    </Container>
  );
}
