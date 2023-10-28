import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AuthProvider from "./src/contexts/AuthContext";
import LogIn from "./src/pages/logIn";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <StatusBar backgroundColor="#ad1818" />
        <Routes />
      </SafeAreaView>
    </AuthProvider>
  );
}
