import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View } from "react-native"

interface IconProps {
  iconName: keyof typeof Feather.glyphMap;
  iconColor?: string;
  iconStyle?: object;
  containerStyle?: object;
  containerSize?: "large" | "small";
}

export const Icon = ({
  iconName,
  iconColor,
  iconStyle,
  containerSize = "large",
  containerStyle,
}: IconProps) => {
  const sizeStyle = containerSize === "small" ? styles.smallContainer : styles.largeContainer;
  return (
    <View style={[styles.container, sizeStyle, containerStyle]}>
      <Feather
        style={iconStyle ? iconStyle : {}}
        color={iconColor ?? "white"}
        name={iconName}
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  smallContainer: {
    width: 24,
    height: 24,
  },
  largeContainer: {
    width: 52,
    height: 52,
  },
});