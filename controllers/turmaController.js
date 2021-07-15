const { Turma, Sequelize } = require('../database/models');
const Op = Sequelize.Op;

const turmaController = {
    index: async (req, res) => {
        // Listando turmas com curso, professor e alunos relacionados
        const turmas = await Turma.findAll({
            include: ['curso', 'professor', 'alunos'],
            order: [['ano_inicio', 'ASC']]
        });
        return res.json(turmas);
    },
    create: async (req, res) => {
        const { duracao, ano_inicio, semestre } = req.body;
        const turma = await Turma.create({
            duracao,
            ano_inicio,
            semestre
        });
        return res.json(turma);
    },
    update: async (req, res) => {
        const { duracao, ano_inicio, semestre } = req.body;
        const { id } = req.params;
        const turma = await Turma.update({
            duracao,
            ano_inicio,
            semestre
        }, {
            where: { id }
        });
        return res.json(turma);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        const turma = await Turma.destroy({
            where: { id }
        });
        return res.json(turma);
    }
};

module.exports = turmaController; 