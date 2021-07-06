module.exports = (sequelize, DataTypes) => {
    const areas = sequelize.define('areas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'areas',
        timestamps: true
        //criatedAt e updatedAt
    });
    
    return areas
}