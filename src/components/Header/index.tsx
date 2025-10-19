import { View, ViewProps } from "react-native";

export function Header({ children, ...rest }: ViewProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 54,
      }}
      {...rest}
    >
      {children}
    </View>
  );
}
