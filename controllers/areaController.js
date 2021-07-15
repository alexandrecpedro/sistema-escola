const { Area, Sequelize } = require('../database/models');
const Op = Sequelize.Op;

const areaController = {
    index: async (req, res) => {
        // Listando areas com cursos relacionados
        const areas = await Area.findAll({
            include: ['cursos'],
            order: [['tipos', 'ASC']]
        });
        return res.json(turmas);
    },
    create: async (req, res) => {
        const { tipo } = req.body;
        const area = await Area.create({
            tipo
        });
        return res.json(area);
    },
    update: async (req, res) => {
        const { tipo } = req.body;
        const { id } = req.params;
        const area = await Area.update({
            tipo
        }, {
            where: { id }
        });
        return res.json(area);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        const area = await Area.destroy({
            where: { id }
        });
        return res.json(area);
    }
};

module.exports = areaController; 