const Aluno = require('../database/models/Aluno')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const alunoController = {
    index: async (req, res) => {
        const alunos = await Aluno.findAll()

        return res.json(alunos)
    }
}

module.exports = alunoController