import { View } from "react-native";

import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoustes";

export function Home({ navigation }: StackRoutesProps<"Home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        title="Home"
        icon="add-circle"
        handleIconClick={() => navigation.navigate("Product", { id: "555" })}
      />
    </View>
  );
}
