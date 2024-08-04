import React from "react"
import { StyleSheet } from "react-native"
import TransactionForm from "@/components/TransactionForm"
import { ScrollView } from "react-native-gesture-handler"
import { useLocalSearchParams } from "expo-router"

export default function transactionForm() {
  const params = useLocalSearchParams<{category_id: string}>();

  return (
    <ScrollView style={styles.mainContainer}> 
      <TransactionForm
        style={{marginBottom: "50%"}}
        selectedCategoryId={typeof params.category_id === 'string' ? parseInt(params.category_id) : undefined}
      />
    </ScrollView>
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
