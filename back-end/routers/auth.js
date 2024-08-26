const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

// Rotas de autenticação
router.post('/', function (req, res) { 
  auth.login(req, res) 
});

module.exports = router;

/*
// Definindo a rota POST /auth
router.post('/auth', (req, res) => {
console.log(req.body)
const { username, password } = req.body;
    // Lógica de autenticação aqui
    res.send(`Autenticado usuário: ${username}`);
});
*/
