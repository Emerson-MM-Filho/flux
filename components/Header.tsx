import { Image, StyleSheet, Text, View } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContentContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.companyName}> Flux </Text>
      </View>
      <View style={styles.rightContentContainer}>
        <Image
          source={require("@/assets/images/alert-icon.png")}
          style={styles.alertIcon}
        />
        <Image
          source={require("@/assets/images/profile-pic.png")}
          style={styles.profilePic}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  leftContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightContentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 24,
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  alertIcon: {
    height: 24,
  },
  profilePic: {
    height: 48,
  },
});
