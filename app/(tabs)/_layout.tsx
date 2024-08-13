import React from 'react'

import { useColorScheme } from '@/hooks/useColorScheme'
import HomeScreen from './index'
import SearchCategory from '../searchCategory'

import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import { Image, View, Dimensions } from 'react-native'

const Tab = createBottomTabNavigator();
const { width: screenWidth } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: (screenWidth - 32 - (screenWidth * 0.5)) / 2,
          width: (screenWidth * 0.5),
          margin: 16,
          borderRadius: 32,
          borderColor: '#2e2e2e',
          borderWidth: 1,
          backgroundColor: 'white',
          // How to don't use this?
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 64,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size}) => (
          <View>
            <Image
              source={require('@/assets/images/home-icon.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#000' }}
            />
          </View>
        )
      }}/>
      <Tab.Screen name="Categories" component={SearchCategory} options={{
        tabBarIcon: ({ focused, color, size}) => (
          <View>
            <Image
              source={require('@/assets/images/credit-card-icon.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#000' }}
            />
          </View>
        )
      }}/>
      <Tab.Screen name="Bank accounts" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size}) => (
          <View>
            <Image
              source={require('@/assets/images/investiments-icon.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#000' }}
            />
          </View>
        )
      }}/>
      <Tab.Screen name="Insights" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size}) => (
          <View>
            <Image
              source={require('@/assets/images/chart-icon.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#000' }}
            />
          </View>
        )
      }}/>
    </Tab.Navigator>
  );
}
