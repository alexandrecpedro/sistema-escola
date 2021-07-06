module.exports = (sequelize, DataTypes) => {
    const alunos_has_turmas = sequelize.define('alunos_has_turmas', {
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
        //criatedAt e updatedAt
    });
    
    return alunos_has_turmas
}