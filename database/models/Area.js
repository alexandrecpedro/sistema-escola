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
        }
    }, {
        tableName: 'areas',
        timestamps: true
        //createdAt e updatedAt
    });
    Area.associate = (models) => {
        // 1:N uma área possui muitos cursos
        Area.hasMany(models.Curso, {
            // apelido da relação
            as: 'cursos',
            // chave estrangeira
            foreignKey: 'area_id'
        })
    }
    
    return Area
}