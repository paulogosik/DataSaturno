
import { type SQLiteDatabase } from 'expo-sqlite'

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS users (
                user TEXT PRIMARY KEY,
                nome TEXT NOT NULL,
                email TEXT NOT NULL,
                senha TEXT NOT NULL 
            );
        `)

    await database.execAsync(`
            INSERT OR IGNORE INTO users (user, nome, email, senha) VALUES ('admin', 'Adminstrador', 'admin@gmail.com', 'admin123');
        `)
}