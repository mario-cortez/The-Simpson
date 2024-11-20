import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "../src/store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "red",
              headerTitleAlign: "center",
              headerTitle: "index",
            })}
          />
        </SafeAreaProvider>
      </Provider>
    </View>
  );
};

export default Layout;
