import { Image, StyleSheet, View } from "react-native"

interface IconProps {
  icon: any;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
}

export const Icon = ({
  icon,
  backgroundColor,
  borderWidth,
  borderColor,
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
    icon: {
      width: 24,
      height: 24,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
    </View>
  );
};
