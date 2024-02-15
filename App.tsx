import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Navigation from "@/src/infrastructure/navigation";
import theme from "@/src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
