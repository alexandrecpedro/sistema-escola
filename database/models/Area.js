module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define('Area', {
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
        //createdAt e updatedAt
    });
    
    return Area
}