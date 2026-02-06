import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Uniwind, useUniwind } from "uniwind";
import * as SplashScreen from 'expo-splash-screen';
import '../../global.css';

SplashScreen.setOptions({
  duration: 300,
  fade: true,
});

export default function RootLayout() {
  const { theme } = useUniwind();

  useEffect(() => {
    // Habilitar temas adaptativos para seguir automáticamente el tema del sistema
    Uniwind.setTheme('system');
  }, []);

  // Determinar si el tema actual es dark
  const isDark = theme === 'dark';

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
