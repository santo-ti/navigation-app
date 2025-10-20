import { View } from "react-native";

import { Header } from "@/components/Header";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

// type RouteParams = StackRoutesProps<"Product">;

export function Product({ navigation, route }: DrawerRoutesProps<"Product">) {
  // const { params } = useRoute<RouteParams["route"]>();
  const productId = route.params?.id;

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        // title={"Product " + params?.id}
        title={"Produto " + productId}
        icon="arrow-circle-left"
        iconPosition="left"
        handleIconClick={() => navigation.goBack()}
      />
    </View>
  );
}
