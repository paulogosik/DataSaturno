import { openDatabaseSync } from 'expo-sqlite';

const db = openDatabaseSync('users.db');
export default db;
