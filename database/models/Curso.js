module.exports = (sequelize, DataTypes) => {
    const cursos = sequelize.define('cursos', {
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
        area_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    }, {
        tableName: 'cursos',
        timestamps: true
        //criatedAt e updatedAt
    });
    
    return cursos
}