import { View } from "react-native";

import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoustes";

export function Product({ navigation, route }: StackRoutesProps<"Product">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        title={"Product " + route.params?.id}
        icon="arrow-circle-left"
        iconPosition="left"
        handleIconClick={() => navigation.goBack()}
      />
    </View>
  );
}
