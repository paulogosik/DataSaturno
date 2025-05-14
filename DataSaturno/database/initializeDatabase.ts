
import { type SQLiteDatabase } from 'expo-sqlite'

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS users (
                user PRIMARY KEY,
                nome TEXT NOT NULL,
                email TEXT NOT NULL,
                senha TEXT NOT NULL 
            );
        `)
}