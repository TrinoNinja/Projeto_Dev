module.exports = {
  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '!QW@#ER$',
      database: 'teste_db'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};

/* 
  //versao 1.0
  const pg = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      //host: '127.0.0.1'
      host: 'localhost',
      port: 5432,
      user: 'root',
      password: '!QW@#ER$',
      database: 'teste_db',
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },   
  });
 
  module.exports = pg; 
*/