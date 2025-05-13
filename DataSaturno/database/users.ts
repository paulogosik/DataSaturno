import db from './users_db';

export const criarTabela = () => {
  db.withTransactionSync((tx: any) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        nome TEXT,
        email TEXT
      );`
    );
  });
};

export const inserirTarefa = (titulo: string) => {
  db.transaction((tx: any) => {
    tx.executeSql('INSERT INTO tarefas (titulo) VALUES (?);', [titulo]);
  });
};

export const listarTarefas = (callback: (tarefas: any[]) => void) => {
  db.transaction((tx: any) => {
    tx.executeSql('SELECT * FROM tarefas;', [], (_: any, { rows }: any) => {
      callback(rows._array);
    });
  });
};
