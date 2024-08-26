const knex = require('knex');

const knexfile = require('../knexfile')

const db = knex(knexfile.development);

async function login(data) {
    return new Promise(async (resolve, reject) => {
        const { username } = data;
        db.select('*')
            //.from('users')
            .from('users as u')
            //.leftJoin('perfil', 'perfil.id', 'users.perfil_id')
            .leftJoin('perfil as p','p.perfil_id','u.perfil_id') 
            .where({ username })
            .first()
            .then((user) => {
                resolve(user)
            })
            .catch((e) => {
                reject(e);
            })
    })
}

module.exports = {
    login
}