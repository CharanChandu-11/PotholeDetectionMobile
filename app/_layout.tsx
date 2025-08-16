// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="LandingPage" options={{ title: "Landing" }} />
      <Stack.Screen name="ReportPothole" options={{ title: "Report Pothole" }} />
      <Stack.Screen name="MapPage" options={{ title: "Map" }} />
      <Stack.Screen name="StatsPage" options={{ title: "Stats" }} />
      <Stack.Screen name="ProfilePage" options={{ title: "Profile" }} />
      <Stack.Screen name="LoginPage" options={{ title: "Login" }} />
    </Stack>
  );
}
