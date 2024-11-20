import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "../src/store";

import CardSimpson from "../src/views/CardSimpson";

export default function Page() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <CardSimpson />
      </SafeAreaProvider>
    </Provider>
  );
}
