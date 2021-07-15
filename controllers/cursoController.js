const { Curso, Sequelize } = require('../database/models');
const Op = Sequelize.Op;

const cursoController = {
    index: async (req, res) => {
        // Listando cursos com áreas e turmas relacionadas
        const cursos = await Curso.findAll({
            include: ['turmas', 'area'],
            order: [['nome', 'ASC']]
        });
        return res.json(cursos);
    },
    create: async (req, res) => {
        const { nome } = req.body;
        const curso = await Curso.create({
            nome
        });
        return res.json(curso);
    },
    update: async (req, res) => {
        const { nome } = req.body;
        const { id } = req.params;
        const curso = await Curso.update({
            nome
        }, {
            where: { id }
        });
        return res.json(curso);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        const curso = await Curso.destroy({
            where: { id }
        });
        return res.json(curso);
    }
};

module.exports = cursoController; 