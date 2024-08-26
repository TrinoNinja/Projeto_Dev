exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('permissao').del()
      .then(function () {
        // Inserts seed entries
        return knex('permissao').insert([
          { pessoa_id: 2, pagina_id: 1, area_id: 1, permissao: '777' },
          { pessoa_id: 2, pagina_id: 1, area_id: 2, permissao: '755' },
          { pessoa_id: 2, pagina_id: 1, area_id: 3, permissao: '700' },
          { pessoa_id: 2, pagina_id: 1, area_id: 4, permissao: '744' },
          { pessoa_id: 2, pagina_id: 1, area_id: 5, permissao: '777' },
        ]);
      });
  };
