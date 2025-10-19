import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type ButtonIconProps = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ name, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={{ padding: 10 }} {...rest}>
      <MaterialIcons name={name} size={24} />
    </TouchableOpacity>
  );
}
