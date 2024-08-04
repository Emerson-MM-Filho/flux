import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View } from "react-native"

interface IconProps {
  iconName: keyof typeof Feather.glyphMap;
  iconSize?: number;
  iconColor?: string;
  containerStyle?: object;
  containerSize?: "small" | "medium" | "large";
}

export const Icon = ({
  iconName,
  iconSize,
  iconColor,
  containerSize = "large",
  containerStyle,
}: IconProps) => {
  let sizeStyle = {};
  switch (containerSize) {
    case "small":
      sizeStyle = styles.smallContainer;
      break;
    case "medium":
      sizeStyle = styles.mediumContainer;
      break;
    case "large":
      sizeStyle = styles.largeContainer;
      break;
    default:
      sizeStyle = styles.largeContainer;
      break;
  }
  return (
    <View style={[styles.container, sizeStyle, containerStyle]}>
      <Feather
        color={iconColor ?? "white"}
        name={iconName}
        size={iconSize ?? 24}
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
  mediumContainer: {
    width: 32,
    height: 32,
  },
  largeContainer: {
    width: 52,
    height: 52,
  },
});