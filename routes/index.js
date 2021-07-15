var express = require('express');
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const alunoController = require('../controllers/alunoController');
const indexController = require('../controllers/indexController');
const professorController = require('../controllers/professorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/alunos
router.get('/alunos', alunoController.index);

// http://localhost:3000/alunos/matricula/ano
router.get('/alunos/matricula/:ano', alunoController.filtroAnoMatricula);

// http://localhost:3000/alunos/nome/:nome
router.get('/alunos/nome/:nome', alunoController.filtroNome);

// http://localhost:3000/professores
router.get('/professores', professorController.index);

// http://localhost:3000/professores
router.post('/professores', professorController.create);

// http://localhost:3000/professores/:id
router.put('/professores/:id', professorController.update);

// http://localhost:3000/professores/:id
router.delete('/professores/:id', professorController.destroy);


// http://localhost:3000/dashboard
router.get('/dashboard', indexController.index);

// http://localhost:3000/alunos/novo
router.get('/alunos/novo', indexController.novo);

// http://localhost:3000/alunos/novo
router.post('/alunos/novo', indexController.create);

// http://localhost:3000/alunos/:id
router.get('/alunos/:id', indexController.editarAluno);

// http://localhost:3000/alunos/:id
router.post('/alunos/:id', indexController.atualizarAluno);

module.exports = router;
