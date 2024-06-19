import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import React, { useMemo, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AnalyticCard from "../../components/AnalyticsCard"
import Header from "../../components/Header"
import TransactionsList from '../../components/TransactionsList'
import TransactionInterface from '../../interfaces/transaction'

export default function HomeScreen() {
  const snapPoints = useMemo(() => ["45%", "82%"], []);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Fort Atacadista 1",
      date: "12/03/2024",
      value: "- R$ 15,68",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      tags: [
        {
          id: 1,
          name: "Páscoa",
          mainColor: "#F54545",
          backgroundColor: "rgba(245, 69, 69, 0.5)",
        },
        {
          id: 2,
          name: "Compras",
          mainColor: "#45CBF5",
          backgroundColor: "rgba(69, 203, 245, 0.5)",
        },
        {
          id: 3,
          name: "Compras",
          mainColor: "#DDF545",
          backgroundColor: "rgba(221, 245, 69, 0.5)",
        },
      ],
    },
    {
      id: 2,
      title: "Fort Atacadista 2",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 3,
      title: "Fort Atacadista 3",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 4,
      title: "Fort Atacadista 4",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 5,
      title: "Fort Atacadista 5",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 6,
      title: "Fort Atacadista 6",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 7,
      title: "Fort Atacadista 7",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 8,
      title: "Fort Atacadista 8",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 9,
      title: "Fort Atacadista 9",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 10,
      title: "Fort Atacadista 10",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 11,
      title: "Fort Atacadista 11",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 12,
      title: "Fort Atacadista 12",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
  ] as TransactionInterface[]);

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
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#2E2E2E" }}
        handleIndicatorStyle={{ backgroundColor: "#fff", width: "25%" }}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>Transactions</Text>
          <View style={styles.addTransactionBtn}>
            <View style={styles.addTransactionBtnIconContainer}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
            <Text style={styles.addTransactionBtnText}>Add new</Text>
          </View>
          <TransactionsList transactions={transactions}/>
        </BottomSheetView>
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
  },
  addTransactionBtnIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: "rgba(190, 190, 190, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  addTransactionBtnText: {
    color: "white",
    fontSize: 16,
  },
});
