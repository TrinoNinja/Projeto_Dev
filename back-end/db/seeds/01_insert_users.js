const bcrypt = require('bcryptjs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {username: 'edilson', password: bcrypt.hashSync('654321', 8)},
    {username: 'eliel',   password: bcrypt.hashSync('654321', 8)},
    {username: 'teste',   password: bcrypt.hashSync('654321', 8)}
  ]);
};
//const query = knex('your_table_name').select('*').where('id', 1);
