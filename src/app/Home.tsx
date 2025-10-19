import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Header } from "@/components/Header";

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        title="Home"
        icon="add-circle"
        handleIconClick={() => navigation.navigate("Product")}
      />
    </View>
  );
}
