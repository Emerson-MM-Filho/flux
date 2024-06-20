import { StyleSheet, Text, View } from "react-native"
import TagInterface from "../interfaces/tag"

export const Tag = ({ id, name, mainColor, backgroundColor }: TagInterface) => {
  return (
    <View
      style={{
        ...styles.tagContainer,
        backgroundColor: backgroundColor,
        borderColor: mainColor,
      }}
      key={id}
    >
      <Text style={{ ...styles.tagText, color: mainColor }}>#</Text>
      <Text style={styles.tagText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    maxHeight: 24,
  },
  tagText: {
    color: "white",
    fontSize: 12,
  },
});
