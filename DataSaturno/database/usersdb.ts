import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('meubanco.db');
export default db;
