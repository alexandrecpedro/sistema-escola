'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bolsa_estudos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      porcentagemDesconto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      patrocinador: {
        type: Sequelize.STRING,
        allowNull: false
      },
      max_aplicacoes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1 // Ativo
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Apagar tabela
    await queryInterface.dropTable('bolsa_estudos');
  }
};
