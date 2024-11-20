import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarLabel: "index",
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarLabel: "home",
        }}
      />
    </Tabs>
  );
}
