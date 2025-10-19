import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type StackRoutesParamList = {
  Home: undefined;
  Product: undefined;
};

export type StackRoutesProps<T extends keyof StackRoutesParamList> =
  NativeStackScreenProps<StackRoutesParamList, T>;

const Stack = createNativeStackNavigator<StackRoutesParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
