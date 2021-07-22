module.exports = (sequelize, DataTypes) => {
    const BolsaEstudos = sequelize.define('BolsaEstudos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false
          },
          porcentagemDesconto: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          patrocinador: {
            type: DataTypes.STRING,
            allowNull: false
          },
          max_aplicacoes: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1 // Ativo
          }
    }, {
        tableName: 'bolsa_estudos',
        timestamps: true
        //createdAt e updatedAt
    });
    BolsaEstudos.associate = (models) => {
        // N:M bolsa_estudos pertence a várias turmas
        BolsaEstudos.belongsToMany(models.Turma, {
            // apelido da relacao
            as: 'turmas',
            // nome da tabela intermediária
            through: 'alunos_has_turmas',
            // chave estrangeira desse model
            foreignKey: 'aluno_id',
            // chave estrangeira do outro model
            otherKey: 'turma_id',
            // adiciona createdAt e updatedAt
            timestamps: true
        })
    }
    return BolsaEstudos;
}