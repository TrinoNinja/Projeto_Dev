
exports.up = function(knex) {
    return knex.schema.createTable('permissao', function(table) {
      table.increments('permissao_id');
      table.integer('pessoa_id').unsigned();
      table.integer('pagina_id').unsigned();
      table.integer('area_id').unsigned();
      table.string('permissao').notNullable();
      table.integer('status_sit').unsigned();
      table.integer('status_com').unsigned();
      table.timestamps(true, true);
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('permissao');
};
  