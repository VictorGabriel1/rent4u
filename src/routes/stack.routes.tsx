import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import LogIn from "../pages/logIn";
import SignUp from "../pages/signUp";
import RegisterVehicle from "../pages/registerVehicle";
import RentDate from "../pages/rentVehicle/rentDate";
import RentList from "../pages/rentVehicle/rentList";
import RentVehicle from "../pages/rentVehicle/rentVehicle";
import PaymentTotal from "../pages/payment/total";
import PaymentCard from "../pages/payment/card";
import PaymentFinal from "../pages/payment/final";
import MyVehicles from "../pages/myVehicles";
import MyRents from "../pages/myRents";

// Auth Pages
const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="logIn" component={LogIn} />
      <AuthStack.Screen name="signUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

// Home Pages
const HomeStack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "#000",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#AD1818" },
        headerBackVisible: true,
        title: "Rent4U",
      }}
    >
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="myRents" component={MyRents} />
      <HomeStack.Screen name="myVehicles" component={MyVehicles} />
    </HomeStack.Navigator>
  );
}

//Rent Vehicle Pages
const RentVehicleStack = createNativeStackNavigator();

export function RentVehicleRoutes() {
  return (
    <RentVehicleStack.Navigator
      screenOptions={{
        headerTintColor: "#000",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#AD1818" },
        headerBackVisible: true,
        title: "Alugar Veículo",
      }}
    >
      <RentVehicleStack.Screen name="rentDate" component={RentDate} />
      <RentVehicleStack.Screen name="rentList" component={RentList} />
      <RentVehicleStack.Screen name="rentVehicle" component={RentVehicle} />
      <RentVehicleStack.Screen name="paymentTotal" component={PaymentTotal} />
      <RentVehicleStack.Screen name="paymentCard" component={PaymentCard} />
      <RentVehicleStack.Screen name="paymentFinal" component={PaymentFinal} />
    </RentVehicleStack.Navigator>
  );
}

// Register Vehicle Pages
const RegisterVehicleStack = createNativeStackNavigator();

export default function RegisterVehicleRoutes() {
  return (
    <RegisterVehicleStack.Navigator
      screenOptions={{
        headerTintColor: "#000",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#AD1818" },
        headerBackVisible: true,
      }}
    >
      <RegisterVehicleStack.Screen
        name="registerVeicScreen"
        options={{ title: "Registar Veículo" }}
        component={RegisterVehicle}
      />
    </RegisterVehicleStack.Navigator>
  );
}
