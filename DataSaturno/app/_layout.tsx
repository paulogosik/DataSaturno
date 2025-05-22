
import { initializeDatabase } from "@/database/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite'

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="users.db" onInit={initializeDatabase}>
      
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen name="home/index" options={{ animation: 'fade' }} />
      <Stack.Screen name="configuracoes/index" options={{ animation: 'fade' }} />
      <Stack.Screen name="login/index" options={{ animation: 'fade' }} />
      <Stack.Screen name="criarconta/index" options={{ animation: 'fade' }} />
      </Stack>

    </SQLiteProvider>
  )
}
