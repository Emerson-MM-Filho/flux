import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { useColorScheme } from "@/hooks/useColorScheme"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native"
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <DismissKeyboard>
        <GestureHandlerRootView>
          <StatusBar style="dark"/>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </GestureHandlerRootView>
      </DismissKeyboard>
    </SafeAreaProvider>
  );
}
