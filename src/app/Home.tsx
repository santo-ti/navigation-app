import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

export function Home({ navigation }: DrawerRoutesProps<"Home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header
        title="Home"
        icon="add-circle"
        iconPosition="left"
        handleIconClick={() => navigation.navigate("Product", { id: "555" })}
      >
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
      </Header>
    </View>
  );
}
