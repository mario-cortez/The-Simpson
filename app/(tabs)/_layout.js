import { Tabs } from "expo-router";

export default function TabsLayout() {
  console.log("tabs");
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
    </Tabs>
  );
}
