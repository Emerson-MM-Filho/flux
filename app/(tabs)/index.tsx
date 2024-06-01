import { Image, StyleSheet, Text, View } from 'react-native'


export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <Image source={require('@/assets/images/logo.png')} style={styles.reactLogo} />
          <Text style={styles.logoTitle}> Flux </Text>
        </View>
        <View style={styles.headerRigthContainer}>
          <Image source={require('@/assets/images/alert-icon.png')} style={styles.alertIcon} />
          <Image source={require('@/assets/images/profile-pic.png')} style={styles.profilePic} />
        </View>
      </View>
      <View style={styles.mainContentContainer}>
        <View style={styles.periodContainer}>
          <Text style={styles.mainContentsmall}>Este mês</Text>
          <Image source={require('@/assets/images/chevron-down.png')} style={styles.reactLogo} />
        </View>
        <View style={styles.currentBalanceContainer}>
          <Text style={styles.mainContentLarge}>R$ 1.324,90</Text>
        </View>
        <View style={styles.incomeExpensesContainer}>
          <Text style={{...styles.mainContentMedium, color: '#0FB50C'}}>+ $ 6.234,28</Text>
          <Text style={{...styles.mainContentMedium, color: '#B50C0C'}}>- $ 4.913,93</Text>
        </View>
        <View style={styles.analitcsContainer}>
          <Text style={styles.analitcsTitle}>Analitcs</Text>
          <View style={styles.analitcsCardContainer}>
            <View style={styles.analitcsCard}>
              <View style={{width: 44, height:44, borderColor: '#fff', borderWidth: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.analitcsCardTitle}>49%</Text>
              </View>
              <Text style={styles.analitcsCardDescription}>Mercado</Text>
              <Text style={styles.analitcsCardDescription}>R$ 628,90</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 24,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  alertIcon: {
    height: 24,
  },
  profilePic: {
    height: 48,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 32,
  },
  headerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRigthContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  mainContentContainer: {
    padding: 16,
    gap: 16,
  },
  mainContentsmall: {
    fontSize: 16,
    fontWeight: 'light',
  },
  periodContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentBalanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContentLarge: {
    fontSize: 40,
    fontWeight: 'semibold',
  },
  incomeExpensesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  mainContentMedium: {
    fontSize: 20,
    fontWeight: 'regular',
  },
  analitcsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  analitcsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  analitcsCardContainer: {},
  analitcsCardDescription: {
    color: '#fff',
  },
  analitcsCard: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 8,
    gap: 8,
    display: 'flex',
    alignItems: 'center',
  },
  analitcsCardTitle: {
    color: '#fff',
  },
});
