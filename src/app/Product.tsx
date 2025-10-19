import { View } from "react-native";

import { Header } from "@/components/Header";
import { StackRoutesParamList } from "@/routes/StackRoustes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ProductProps = NativeStackScreenProps<StackRoutesParamList, "Product">;

export function Product({ navigation }: ProductProps) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        title="Product"
        icon="arrow-circle-left"
        iconPosition="left"
        handleIconClick={() => navigation.goBack()}
      />
    </View>
  );
}
