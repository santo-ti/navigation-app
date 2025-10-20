import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { MaterialIcons } from "@expo/vector-icons";

export type TabRoutesParamList = {
  Home: undefined;
  Product: undefined | { id: string };
};

export type TabRoutesProps<T extends keyof TabRoutesParamList> =
  BottomTabScreenProps<TabRoutesParamList, T>;

const Tab = createBottomTabNavigator<TabRoutesParamList>();

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#92929c",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
