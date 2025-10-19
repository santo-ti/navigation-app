import { View } from "react-native";

import { Header } from "@/components/Header";

export function Home() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header title="Home" icon="add-circle" />
    </View>
  );
}
