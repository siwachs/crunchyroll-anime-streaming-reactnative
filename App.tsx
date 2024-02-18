import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Navigation from "@/src/infrastructure/navigation";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import theme from "@/src/infrastructure/theme";

export default function App() {
  const [latoLoaded, latoLoadingError] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || latoLoadingError) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
