import { ButtonIcon, ButtonIconProps } from "@/components/ButtonIcon";
import { Title } from "@/components/Title";
import { View, ViewProps } from "react-native";

export type HeaderProps = ViewProps & {
  title: string;
  icon: ButtonIconProps["name"];
};

export function Header({ title, icon, ...rest }: HeaderProps) {
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
      <Title>{title}</Title>
      <ButtonIcon name={icon} />
    </View>
  );
}
