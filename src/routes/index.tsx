import { NavigationContainer } from "@react-navigation/native";

import { TabRoutes } from "@/routes/TabRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <TabRoutes />
    </NavigationContainer>
  );
}
