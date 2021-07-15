const { Aluno, Turma, Professor, Curso } = require('../database/models')

const indexController = {
    index: async (req, res) => {
        // Total alunos, turmas, professores, cursos
        // Exibir os últimos 5 cadastrados de cada

        // Busca últimos 5 alunos cadastrados
        const alunos = await Aluno.findAll({
            limit: 5,
            order: [['createdAt', 'DESC']]
        });

        const professores = await Professor.findAll({
            include: ['turmas'],
            limit: 5,
            order: [['createdAt', 'DESC']]
        });
        
        const cursos = await Curso.findAll({
            include: ['turmas', 'area'],
            limit: 5,
            order: [['nome', 'ASC']]
        })

        return res.render('dashboard', {
            alunos, 
            professores,
            cursos
        });
    },
    novo: (req, res) => {
        // renderiza formulário novo aluno
        return res.render('novoAluno');
    },
    create: async (req, res) => {
        const { nome, sobrenome, ano_matricula } = req.body;
        const aluno = await Aluno.create({nome, sobrenome, ano_matricula});

        return res.redirect('/dashboard');
    },
    editarAluno: async (req, res) => {
        let {id} = req.params;
        const aluno = await Aluno.findByPk(id);

        return res.render('editarAluno', {aluno});
    },
    atualizarAluno: async (req, res) => {
        let {id} = req.params;
        let {nome, sobrenome, ano_matricula} = req.body;
        const aluno = await Aluno.update({nome, sobrenome, ano_matricula}, {where: {id}});

        return res.redirect('/dashboard');
    }
};

module.exports = indexController; 