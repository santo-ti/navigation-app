import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Header } from "@/components/Header";

export function Product() {
  const navigation = useNavigation();

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
