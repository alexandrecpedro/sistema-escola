module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define('Turma', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        duracao: {
            type: DataTypes.INTEGER(10),
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
        //createdAt e updatedAt
    });
    Turma.associate = (models) => {
        // N:1 várias turmas pertencem a 1 curso
        Turma.belongsTo(models.Curso, {
            as: 'curso',
            foreignKey: 'curso_id'
        })
        // N:1 várias turmas pertencem a 1 professor
        Turma.belongsTo(models.Professor, {
            as: 'professor',
            foreignKey: 'professor_id'
        })
        // N:M uma turma possui vários alunos
        Turma.belongsToMany(models.Aluno, {
            as: 'alunos',
            through: 'alunos_has_turmas',
            foreignKey: 'turma_id',
            otherKey: 'aluno_id',
            timestamps: true
        })
    }

    return Turma
}