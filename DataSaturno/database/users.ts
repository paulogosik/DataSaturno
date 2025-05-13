import db from './usersdb';

export const criarTabela = () => {
  db.withTransactionSync(() => {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT
      );`
    );
  });
};


export const inserirTarefa = (titulo: string) => {
  const comando = `INSERT INTO tarefas (titulo) VALUES ('${titulo}');`
  db.withTransactionSync(() => {
    db.execAsync(comando);
  });
};

export const listarTarefas = (callback: (tarefas: any[]) => void) => {
  const result = db.execSync('SELECT * FROM tarefas;');
    
  const tarefas = result[0]?.rows?._array || []; 
    
    // Chama o callback com as tarefas
    callback(tarefas);
};
