module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'cursos',
        timestamps: true
        //createdAt e updatedAt
    });
    Curso.associate = (models) => {
        // N:1 curso pertence a uma área
        Curso.belongsTo(models.Area, {
            // apelido da relação
            as: 'area',
            // chave estrangeira
            foreignKey: 'area_id'
        })
        // 1:N um curso possui muitas turmas
        Curso.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey: 'curso_id'
        })
    }

    return Curso
}