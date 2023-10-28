import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export default function Routes() {
  const { authenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authenticated ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
