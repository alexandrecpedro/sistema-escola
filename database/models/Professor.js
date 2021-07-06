module.exports = (sequelize, DataTypes) => {
    const professores = sequelize.define('professores', {
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
        }
    }, {
        tableName: 'professores',
        timestamps: true
        //criatedAt e updatedAt
    });
    
    return professores
}