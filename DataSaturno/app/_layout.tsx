
import { initializeDatabase } from "@/database/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite'

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="users.db" onInit={initializeDatabase}>
      
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

    </SQLiteProvider>
  )
}
