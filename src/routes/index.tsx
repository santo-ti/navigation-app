import { NavigationContainer } from "@react-navigation/native";

import { DrawerRoutes } from "@/routes/DrawerRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  );
}
