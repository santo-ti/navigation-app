import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Header } from "@/components/Header";
import { StackRoutesParamList } from "@/routes/StackRoustes";

type HomeProps = NativeStackScreenProps<StackRoutesParamList, "Home">;

export function Home({ navigation }: HomeProps) {
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
