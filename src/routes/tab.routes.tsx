import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../pages/home";
import RegisterVehicleRoutes, {
  HomeRoutes,
  RentVehicleRoutes,
} from "./stack.routes";
import Profile from "../pages/profile";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#AD1818" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="homeStack"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="registerVec"
        component={RegisterVehicleRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="directions-car" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="rentVec"
        component={RentVehicleRoutes}
        options={{
          title: "Alugar veículo",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-today" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: "#000",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#AD1818" },
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
