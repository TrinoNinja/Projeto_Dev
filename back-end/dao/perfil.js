const knex = require('knex');
const knexfile = require('../knexfile')
const db = knex(knexfile.development);

async function select() {
    return new Promise(async (resolve, reject) => {
        await db('perfil').select('perfil_id', 'perfil', 'menu').orderBy('perfil_id')
            .then((resultado) => {
                resolve(resultado)
            })
            .catch((e) => {
                reject(e);
            });
    })
}

async function selectId(id) {
    return new Promise(async (resolve, reject) => {
        await db('perfil').select('perfil_id', 'perfil', 'menu').where({ id }).first()
            .then((resultado) => {
                resolve(resultado)
            })
            .catch((e) => {
                reject(e);
            });
    })
}

async function insert(data) {
    return new Promise(async (resolve, reject) => {
        const { perfil, menu } = data;
        await db('perfil').insert({ perfil, menu: menu })
            .then((res) => {
                resolve(res);
            })
            .catch((e) => {
                console.log(e);
                reject(e);
            })
        
    })
}

async function update(data) {
    return new Promise(async (resolve, reject) => {

        const { id, perfil, menu } = data;

        let objUpd = { perfil, menu };

        await db('perfil').where({ id }).update(objUpd)
            .then((res) => {
                resolve(res);
            })
            .catch((e) => {
                reject(e);
            })
    })
}

async function excluir(data) {
    return new Promise(async (resolve, reject) => {
        db('perfil').where({perfil_id: data.id}).del()
        .then((res)=>{
            resolve(res);
        })
        .catch((e)=>{
            reject(e);
        })
    })
}

module.exports = {
    select,
    selectId,
    insert,
    update,
    excluir
}