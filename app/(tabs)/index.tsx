import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet"
import React, { useState } from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AnalyticCard from "../../components/AnalyticsCard"
import Header from "../../components/Header"
import { ThemedText } from "../../components/ThemedText"
import { ThemedView } from "../../components/ThemedView"
import TransactionForm from "../../components/TransactionForm"
import TransactionsList from "../../components/TransactionsList"

export default function HomeScreen() {
  const [contentToShow, setContentToShow] = useState("transactions");

  return (
    <SafeAreaView style={styles.tabContainer}>
      <Header />
      <View>
        <View style={styles.periodContainer}>
          <Text style={styles.periodText}>Este mês</Text>
          <Image source={require("@/assets/images/chevron-down.png")} />
        </View>
        <View style={styles.currentBalanceContainer}>
          <Text style={styles.mainContentLarge}>R$ 1.324,90</Text>
        </View>
        <View style={styles.incomeExpensesContainer}>
          <Text style={{ ...styles.mainContentMedium, color: "#0FB50C" }}>
            + $ 6.234,28
          </Text>
          <Text style={{ ...styles.mainContentMedium, color: "#B50C0C" }}>
            - $ 4.913,93
          </Text>
        </View>
      </View>
      <View style={styles.analitcsContainer}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Analitcs</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.analitcsCardContainer}
          showsHorizontalScrollIndicator={false}
        >
          {[
            {
              percentage: 49,
              description: "Mercado",
              value: 628.9,
            },
            {
              percentage: 36,
              description: "Saúde",
              value: 431.53,
            },
            {
              percentage: 15,
              description: "Transporte",
              value: 194.47,
            },
            {
              percentage: 5,
              description: "Lazer",
              value: 74.9,
            },
          ].map((item, index) => (
            <AnalyticCard
              percentage={item.percentage}
              description={item.description}
              value={item.value}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
      <BottomSheet
        snapPoints={["45%", "90%"]}
        backgroundStyle={{ backgroundColor: "#2E2E2E" }}
        handleIndicatorStyle={{ backgroundColor: "#fff", width: "25%" }}
        enableOverDrag={true}
        style={styles.bottomSheet}
      >
        <BottomSheetView>
          {contentToShow === "transactions" && (
            <ThemedView style={styles.bottomSheetHeader}>
              <ThemedText style={styles.bottomSheetTitle}>Transactions</ThemedText>
            </ThemedView>
          )}
        </BottomSheetView>
        {contentToShow === "transactionForm" && (
          <TransactionForm style={{paddingBottom: "50%"}} onCancel={() => setContentToShow("transactions")} />
        )}
        {contentToShow === "transactions" && (
          <BottomSheetScrollView>
            <TouchableOpacity
              style={styles.addTransactionBtn}
              onPress={() => setContentToShow("transactionForm")}
            >
              <View style={styles.addTransactionBtnIconContainer}>
                <Image source={require("@/assets/images/add-icon.png")} />
              </View>
              <Text style={styles.addTransactionBtnText}>Add new</Text>
            </TouchableOpacity>
            <TransactionsList />
          </BottomSheetScrollView>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "white",
    gap: 16,
    height: "100%",
  },
  periodText: {
    fontSize: 16,
    fontWeight: "light",
  },
  periodContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  currentBalanceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContentLarge: {
    fontSize: 40,
    fontWeight: "semibold",
  },
  incomeExpensesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  mainContentMedium: {
    fontSize: 20,
    fontWeight: "regular",
  },
  analitcsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: 16,
    gap: 16,
  },
  analitcsCardContainer: {
    columnGap: 16,
    rowGap: 16,
  },
  bottomSheet: {
    padding: 16,
    color: "white",
    rowGap: 20,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  bottomSheetTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  addTransactionBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#2A2A2A",
    gap: 8,
    marginBottom: 16,
  },
  addTransactionBtnIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addTransactionBtnText: {
    color: "white",
    fontSize: 16,
  },
});
