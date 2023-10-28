import { useContext } from "react";
import CustomButton from "../../components/customButton";
import { Container } from "../../components/global/Container";
import { AuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  const { logOut } = useContext(AuthContext);

  return (
    <Container backgroundColor="#2E2C2C">
      <CustomButton
        title="Desconectar"
        color="#ad1818"
        textColor="#fff"
        onPress={() => logOut()}
      />
    </Container>
  );
}
