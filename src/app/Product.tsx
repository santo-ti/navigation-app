import { View } from "react-native";

import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";

// type RouteParams = StackRoutesProps<"Product">;

export function Product({ navigation, route }: StackRoutesProps<"Product">) {
  // const { params } = useRoute<RouteParams["route"]>();
  const productId = route.params?.id;

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        // title={"Product " + params?.id}
        title={"Product " + productId}
        icon="arrow-circle-left"
        iconPosition="left"
        handleIconClick={() => navigation.goBack()}
      />
    </View>
  );
}
