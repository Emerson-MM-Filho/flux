import { StyleSheet, Text, View } from "react-native"

interface AnalyticData {
  percentage: number;
  description: string;
  value: number;
}

const AnalyticCard = ({ percentage, description, value }: AnalyticData) => {
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.value}>R$ {value}</Text>
    </View>
  );
};

export default AnalyticCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: 120,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#262626",
  },
  chart: {
    width: 44,
    height: 44,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  percentage: {
    color: "#fff",
  },
  description: {
    color: "#fff",
  },
  value: {
    color: "#fff",
    fontWeight: "bold",
  },
});
