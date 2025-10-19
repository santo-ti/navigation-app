import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "@/routes/StackRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
