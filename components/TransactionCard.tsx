import { ScrollView, StyleSheet, Text, View } from "react-native"
import TransactionInterface from "../interfaces/transaction"
import { Icon } from './Icon'
import { Tag } from './Tag'

const TransactionCard = ({
  id,
  title,
  date,
  category,
  value,
  tags,
}: TransactionInterface) => {
  return (
    <View style={styles.cardContainer} key={id}>
      <Icon icon={category.icon}/>
      <View style={styles.cardContent}>
        <View style={styles.topContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.date}>{date}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.transactionCardTagsContainer}
          >
            {tags?.map(({ id, name, mainColor, backgroundColor }) => (
              <Tag
                key={id}
                id={id}
                name={name}
                mainColor={mainColor}
                backgroundColor={backgroundColor}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#2A2A2A",
    gap: 8,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bottomContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 8,
  },
  title: {
    color: "white",
  },
  date: {
    color: "#B9B9B9",
    fontSize: 12,
  },
  value: {
    fontSize: 16,
    color: "white",
  },
  transactionCardTagsContainer: {
    columnGap: 4,
    alignSelf: "flex-end",
  },
});
