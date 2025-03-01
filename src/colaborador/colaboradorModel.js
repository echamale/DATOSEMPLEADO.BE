import { DataTypes } from 'sequelize';

export const Colaborador = (sequelize) => {
    return sequelize.define(
    'Colaborador',
    {
        idColaborador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: { msg: 'El nombre no puede estar vacio'},
                len: [2, 45]
            }
        },
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        edad:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 110
            }
        },
        profesion: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        estadoCivil: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    },
    {
        tableName: 'colaboradores',
        timestamps: false
    }); 
}