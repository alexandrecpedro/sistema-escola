module.exports = (sequelize, DataTypes) => {
    const AlunoHasTurma = sequelize.define('AlunoHasTurma', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        turma_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        numero_faltas: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        tableName: 'alunos_has_turmas',
        timestamps: true
        //createdAt e updatedAt
    });
    
    return AlunoHasTurma
}