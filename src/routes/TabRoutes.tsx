import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

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
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
    </Tab.Navigator>
  );
}
