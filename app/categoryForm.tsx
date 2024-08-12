import React from "react"
import { StyleSheet, View } from "react-native"
import CategoryForm from "@/components/CategoryForm"
import { useLocalSearchParams } from "expo-router"

export default function categoryForm() {
  const params = useLocalSearchParams<{
    id?: string;
    category_name?: string;
    icon?: string;
    color?: string;
  }>();

  return (
    <View style={styles.mainContainer}> 
      <CategoryForm
        categorie={{
          id: params.id ? parseInt(params.id) : undefined,
          name: params.category_name,
          // icon: params.icon ,
          color: params.color
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#2E2E2E",
    gap: 16,
    padding: 16,
    height: "100%",
  },
});
