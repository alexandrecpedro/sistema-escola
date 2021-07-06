module.exports = (sequelize, DataTypes) => {
    const turmas = sequelize.define('turmas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        duracao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ano_inicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        semestre: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        curso_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        professor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    }, {
        tableName: 'turmas',
        timestamps: true
        //criatedAt e updatedAt
    });
    
    return turmas
}