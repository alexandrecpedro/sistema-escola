const { Professor, Sequelize } = require('../database/models');
const Op = Sequelize.Op;

const professorController = {
    index: async (req, res) => {
        const professores = await Professor.findAll({
            order: [['nome', 'ASC']]
        });
        return res.json(professores);
    },
    create: async (req, res) => {
        const { nome, sobrenome } = req.body;
        const professor = await Professor.create({
            nome,
            sobrenome
        });
        return res.json(professor);
    },
    update: async (req, res) => {
        const { nome, sobrenome } = req.body;
        const { id } = req.params;
        const professor = await Professor.update({
            nome,
            sobrenome
        }, {
            where: { id }
        });
        return res.json(professor);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        const professor = await Professor.destroy({
            where: { id }
        });
        return res.json(professor);
    }
};

module.exports = professorController; 