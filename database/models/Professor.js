module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
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
        //createdAt e updatedAt
    });
    Professor.associate = (models) => {
        // 1:N professor tem várias turmas
        Professor.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey: 'professor_id'
        })
    }
    
    return Professor
}