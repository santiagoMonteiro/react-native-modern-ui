import { Home } from "./src/Home";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import THEME from "./src/theme"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
}
