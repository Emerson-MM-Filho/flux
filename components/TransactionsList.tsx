import { ScrollView, StyleSheet } from "react-native"
import { useTransactions } from "../hooks/useTransactions"
import TransactionCard from "./TransactionCard"

const TransactionsList = () => {
  const transactions = useTransactions();
  return (
    <ScrollView
      contentContainerStyle={styles.transactionList}
      showsVerticalScrollIndicator={false}
    >
      {transactions.map(({ id, title, date, category, value, tags }) => (
        <TransactionCard
          id={id}
          title={title}
          date={date}
          category={category}
          value={value}
          tags={tags}
          key={id}
        />
      ))}
    </ScrollView>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  transactionList: {
    rowGap: 16,
    paddingBottom: 68,
  },
});