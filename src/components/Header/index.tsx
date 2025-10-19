import { ButtonIcon, ButtonIconProps } from "@/components/ButtonIcon";
import { Title } from "@/components/Title";
import { View, ViewProps } from "react-native";

export type HeaderProps = ViewProps & {
  title: string;
  icon: ButtonIconProps["name"];
  iconPosition?: "left" | "right";
};

export function Header({
  title,
  icon,
  iconPosition = "right",
  ...rest
}: HeaderProps) {
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
      {iconPosition === "left" && <ButtonIcon name={icon} />}
      <Title>{title}</Title>
      {iconPosition === "right" && <ButtonIcon name={icon} />}
    </View>
  );
}
