import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection:{
    filename: path.resolve(__dirname,'src', 'database', 'database.sqlite'), //Resolve o caminho independente do sistema
  },
  migrations:{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds:{
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
}