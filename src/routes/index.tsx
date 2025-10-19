import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "@/routes/StackRoustes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
