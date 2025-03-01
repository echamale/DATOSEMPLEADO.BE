import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Colaborador = sequelize.define(
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
    }
); 
