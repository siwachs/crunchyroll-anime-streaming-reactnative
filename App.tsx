import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import { StatusBar } from "expo-status-bar";

import Navigation from "@/src/infrastructure/navigation";

export default function App() {
  const [latoLoaded, latoLoadingError] = useLato({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!latoLoaded || latoLoadingError) return null;

  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}
