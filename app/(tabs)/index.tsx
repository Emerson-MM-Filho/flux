import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'



export default function HomeScreen() {

  const snapPoints = useMemo(() => ['45%', '82%'], []);

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
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.analitcsCardContainer}
            showsHorizontalScrollIndicator={false}
          >
            {
              [
                {
                  percentage: '49',
                  description: 'Mercado',
                  value: '628.90',
                },
                {
                  percentage: '36',
                  description: 'Saúde',
                  value: '431.53',
                },
                {
                  percentage: '15',
                  description: 'Transporte',
                  value: '194.47',
                },
                {
                  percentage: '5',
                  description: 'Lazer',
                  value: '74.90',
                },
              ].map((item, index) => (
                <View style={styles.analitcsCard} key={index}>
                  <View style={{width: 44, height:44, borderColor: '#fff', borderWidth: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.analitcsCardTitle}>{item.percentage}%</Text>
                  </View>
                  <Text style={styles.analitcsCardDescription}>{item.description}</Text>
                  <Text style={styles.analitcsCardDescription}>R$ {item.value}</Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#2E2E2E'}}
        handleIndicatorStyle={{backgroundColor: '#fff', width: '25%'}}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>Transactions</Text>
          <ScrollView
            contentContainerStyle={styles.transactionList}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.transactionCard}>
              <View style={styles.transactionCardLeftContent}>
                <View style={{...styles.transactionCardIconContainer, backgroundColor: 'none'}}>
                  <Image source={require('@/assets/images/add-icon.png')}/>
                </View>
                <View style={{...styles.transactionCardContentContainer, justifyContent: 'center'}}>
                  <Text style={styles.transactionCardTitle}>Add new</Text>
                </View>
              </View>
            </View>
            {
              [
                {
                  id: 1,
                  title: 'Fort Atacadista',
                  date: '12/03/2024',
                  value: '- R$ 15,68',
                  tags: [
                    {id: 1, name: 'Páscoa', mainColor: '#F54545', backgroundColor: 'rgba(245, 69, 69, 0.5)'},
                    {id: 2, name: 'Compras', mainColor: '#45CBF5', backgroundColor: 'rgba(69, 203, 245, 0.5)'},
                    {id: 3, name: 'Compras', mainColor: '#DDF545', backgroundColor: 'rgba(221, 245, 69, 0.5)'},
                  ],
                },
                {
                  id: 1,
                  title: 'Fort Atacadista',
                  date: '12/03/2024',
                  value: '- R$ 15,68',
                  tags: [
                    {id: 1, name: 'Páscoa', mainColor: '#F54545', backgroundColor: 'rgba(245, 69, 69, 0.5)'},
                    {id: 2, name: 'Compras', mainColor: '#45CBF5', backgroundColor: 'rgba(69, 203, 245, 0.5)'},
                    {id: 3, name: 'Compras', mainColor: '#DDF545', backgroundColor: 'rgba(221, 245, 69, 0.5)'},
                  ],
                },
                {
                  id: 1,
                  title: 'Fort Atacadista',
                  date: '12/03/2024',
                  value: '- R$ 15,68',
                  tags: [
                    {id: 1, name: 'Páscoa', mainColor: '#F54545', backgroundColor: 'rgba(245, 69, 69, 0.5)'},
                    {id: 2, name: 'Compras', mainColor: '#45CBF5', backgroundColor: 'rgba(69, 203, 245, 0.5)'},
                    {id: 3, name: 'Compras', mainColor: '#DDF545', backgroundColor: 'rgba(221, 245, 69, 0.5)'},
                  ],
                },
                {
                  id: 1,
                  title: 'Fort Atacadista',
                  date: '12/03/2024',
                  value: '- R$ 15,68',
                  tags: [
                    {id: 1, name: 'Páscoa', mainColor: '#F54545', backgroundColor: 'rgba(245, 69, 69, 0.5)'},
                    {id: 2, name: 'Compras', mainColor: '#45CBF5', backgroundColor: 'rgba(69, 203, 245, 0.5)'},
                    {id: 3, name: 'Compras', mainColor: '#DDF545', backgroundColor: 'rgba(221, 245, 69, 0.5)'},
                  ],
                },
                {
                  id: 1,
                  title: 'Fort Atacadista',
                  date: '12/03/2024',
                  value: '- R$ 15,68',
                  tags: [
                    {id: 1, name: 'Páscoa', mainColor: '#F54545', backgroundColor: 'rgba(245, 69, 69, 0.5)'},
                    {id: 2, name: 'Compras', mainColor: '#45CBF5', backgroundColor: 'rgba(69, 203, 245, 0.5)'},
                    {id: 3, name: 'Compras', mainColor: '#DDF545', backgroundColor: 'rgba(221, 245, 69, 0.5)'},
                  ],
                },
              ].map(({id, title, date, value, tags}) => (
                <View style={styles.transactionCard} key={id}>
                  <View style={styles.transactionCardLeftContent}>
                    <View style={styles.transactionCardIconContainer}>
                      <Image source={require('@/assets/images/cart-icon.png')}/>
                    </View>
                    <View style={styles.transactionCardContentContainer}>
                      <Text style={styles.transactionCardTitle}>{title}</Text>
                      <Text style={styles.transactionCardTitle}>{date}</Text>
                    </View>
                  </View>
                  <View style={styles.transactionCardRightContent}>
                    <Text style={styles.transactionCardTitle}>{value}</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {
                        tags?.map(({id, name, mainColor, backgroundColor}) => (
                          <View
                            style={{...styles.tag, backgroundColor: backgroundColor, borderColor: mainColor}}
                            key={id}
                          >
                            <Text style={{color: mainColor}}>#</Text>
                            <Text style={styles.tagName}>{name}</Text>
                          </View>
                        ))
                      }
                    </ScrollView>
                  </View>
                </View>
              ))
            }
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    gap: 16,
  },
  analitcsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  analitcsCardContainer: {
    columnGap: 16,
    rowGap: 16,
  },
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
  bottomSheet: {
    padding: 16,
    color: 'white',
    rowGap: 20,
  },
  bottomSheetTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionList: {
    rowGap: 16,
  },
  transactionCardIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: 'rgba(190, 190, 190, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
  },
  transactionCardTitle: {
    color: 'white',
  },
  transactionCardLeftContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  transactionCardRightContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '50%',
  },
  transactionCardContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tag: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  tagName: {
    color: 'white',
  },
});
