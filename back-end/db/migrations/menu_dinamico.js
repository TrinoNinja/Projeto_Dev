exports.up = function(knex) {
    return knex.schema.createTable('perfil', function(table) {
      table.increments('perfil_id');
      table.string('perfil').notNullable().unique();
      table.json('menu').notNullable();
      table.timestamps(true, true);
    })
    .then(function() {
      return knex.schema.table('users', function(table) {
        table.integer('perfil_id').unsigned();
        table.foreign('perfil_id').references('perfil.perfil_id');
      });
    });
  };
  
exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropForeign('perfil_id');
      table.dropColumn('perfil_id');
    })
    .then(function() {
      return knex.schema.dropTableIfExists('perfil');
    });
 };
  