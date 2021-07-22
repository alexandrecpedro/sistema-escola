'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // bulkInsert(tableName, object)
    await queryInterface.bulkInsert('alunos', [{
      nome: 'Hendy',
      sobrenome: 'Almeida',
      ano_matricula: 2013,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Kayza',
      sobrenome: 'Rosa',
      ano_matricula: 2010,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Vinicius',
      sobrenome: 'Oliveira',
      ano_matricula: 2012,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    // bulkDelete(tableName, where)
    await queryInterface.bulkDelete('alunos', null, {});
  }
};
