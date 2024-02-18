import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Navigation from "@/src/infrastructure/navigation";
import theme from "@/src/infrastructure/theme";

export default function App() {
  const [latoLoaded, latoLoadingError] = useLato({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
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
