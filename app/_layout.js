import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "../src/store";
import { Provider } from "react-redux";

const Layout = () => {
  const showInfo = (props) => {
    console.log(props);
  };
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
              headerTitle: showInfo(route),
              headerTitleAlign: "center",
            })}
          />
        </SafeAreaProvider>
      </Provider>
    </View>
  );
};

export default Layout;
