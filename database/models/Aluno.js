module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
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
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'alunos',
        timestamps: true
        //criatedAt e updatedAt
    });
    
    return Aluno
}