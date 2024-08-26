//definir porta 
const PORT = process.env.PORT || 3000;

//utilizar as rotas
const app = require('./routers/index');
  
//aplication listen
app.http.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



/*
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('knex');

// criar conexao com o banco
const knexfile = require('./knexfile')

// criar objeto do banco de dados
const db = knex(knexfile.development);
//const db = knexfile;

//definir porta 
const PORT = process.env.PORT || 3000;

// Habilita express e chamadas entre sites diferentes...
const express = require('express');
const cors = require('cors')

// criar o aplicativo express do sistema
const app = express();

// atribuindo express json
app.use(express.json());

// Definir o uso de URL codificada...
app.use(express.urlencoded({ extended: true }))

// Habilita chamadas entre sites diferentes...
app.use(cors());

// Rotas de autenticação
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body);
    ////const user = await db('users').where({ username }).first();
    //console.log(`req.body:${JSON.stringify(req.body)}`)
    const user = await db.select('*') 
    .from('users as u')
    .leftJoin('perfil as p','p.perfil_id','u.perfil_id') 
    .where({ username }).first();

    if (!user || !bcrypt.compareSync(password, user.password)) {
      // if (!user || password !== user.password) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  
    const token = jwt.sign({ id: user.id }, 'abcdefghijklmnopqrstuvwxyz', { expiresIn: '1h' });
    const user_id = user.id;

    //console.log(user.menu)

    res.json({ token, user_id, menu: user.menu });
});
  
// Middleware de autenticação 
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }
  
  jwt.verify(token, 'abcdefghijklmnopqrstuvwxyz', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Falha na autenticação do token' });
    }
    req.userId = decoded.id;
    next();
  });
}

//Exemplo de chamada asincrona e sincrona  
//async function ver_info_do_pais(nome_do_pais) {
//  const info = await fetch("https://restcountries.com/v3.1/name/" + nome_do_pais);
//  console.log(await info.json());
//}
//ver_info_do_pais("brazil");


// Rotas CRUD de usuários (metodos)

// metodo GET
app.get('/users/:user_id', verifyToken, async (req, res) => {
  //const { id } = req.body;
  const { user_id } = req.params;

//  try {

  if (user_id > 0) {
  //if ( typeof(id) !== undefined ) {
    const users2 = await db('users').where({user_id}).select('id', 'username', 'password', 'perfil_id');
    res.json(users2);
  } else {
    const users1 = await db('users').select('id', 'username', 'password', 'perfil_id');
    res.json(users1);
  }

//  } catch (error) {
//    res.status(404).json({ message: 'Erro ao receber valores dos parametros' });
//  }

  //console.log(error);
});

// metodo GET
app.get('/perfil/:perfil_id', verifyToken, async (req, res) => {
  const { perfil_id } = req.params;

  if (perfil_id > 0) {
    const perfil1 = await db('perfil').where({perfil_id}).select('perfil_id', 'perfil', 'menu');
    res.json(perfil1);
  } else {
    const perfil2 = await db('perfil').select('perfil_id', 'perfil', 'menu');  
    res.json(perfil2);
  }  

});

// metodo GET
app.get('/permissao/:pessoa_id', verifyToken, async (req, res) => {
  const { pessoa_id } = req.params;

  if (pessoa_id > 0) {
    const permissao1 = await db('permissao').where({pessoa_id}).select('permissao_id', 'pessoa_id', 'pagina_id', 'area_id', 'permissao');
    res.json(permissao1);
  } else {
    const permissao2 = await db('permissao').select('permissao_id', 'pessoa_id', 'pagina_id', 'area_id', 'permissao');
    res.json(permissao2);
  }  

});

// metodo POST
app.post('/users', verifyToken, async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    await db('users').insert({ username, password: hashedPassword });
    res.sendStatus(201);
  } catch (error) {
    //console.log(error)
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});
  
// metodo PUT
app.put('/users/:user_id', verifyToken, async (req, res) => {
  const { user_id } = req.params;
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    await db('users').where({ user_id }).update({ username, password: hashedPassword });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
});
  
// metodo DELETE
app.delete('/users/:user_id', verifyToken, async (req, res) => {
  const { user_id } = req.params;
  
  try {
    await db('users').where({ user_id }).del();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário' });
  }
});

//aplication listen
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
 
*/