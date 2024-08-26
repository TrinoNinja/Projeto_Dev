exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('perfil').del()
      .then(function () {
        // Inserts seed entries
        return knex('perfil').insert([
          { perfil: 'Admin', menu: JSON.stringify(`[{"id":1, "link":"/", "label":"Login", "icon":"mdi-login"},{"id":2, "link":"/home", "label":"Home", "icon":"mdi-home"},{"id":3, "link":"/users", "label":"Usuário", "icon":"mdi-account"},{"id":4, "link":"/edit_user", "label":"Editar Usuário", "icon":"mdi-account"},{"id":5, "link":"/contato", "label":"Contato", "icon":"mdi-gmail"},{"id":6, "link":"/sobre", "label":"Sobre", "icon":"mdi-information-outline"}]`) },
          { perfil: 'Gerencial', menu: JSON.stringify({ /* seu menu aqui */ }) },
          { perfil: 'Operacional', menu: JSON.stringify({ /* seu menu aqui */ }) }
        ]);
      });
  };
  