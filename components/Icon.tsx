import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View } from "react-native"

interface IconProps {
  iconName: keyof typeof Feather.glyphMap;
  iconColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  style?: object;
}

export const Icon = ({
  iconName: icon,
  iconColor,
  backgroundColor,
  borderWidth,
  borderColor,
  style,
}: IconProps) => {
  const styles = StyleSheet.create({
    container: {
      width: 52,
      height: 52,
      borderRadius: 8,
      backgroundColor: backgroundColor ?? "rgba(190, 190, 190, 0.5)",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: borderWidth ?? 0,
      borderColor: borderColor ?? "transparent",
    },
  });

  return (
    <View style={styles.container}>
      <Feather
        style={style ? style : {}}
        color={iconColor ?? "white"}
        name={icon}
        size={24}
      />
    </View>
  );
};
