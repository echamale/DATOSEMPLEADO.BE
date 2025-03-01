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
            validate: {
                notEmpty: ({ msg: 'Nombre no puede estar vacio'}),
                len: {
                    args: [2, 45],
                    msg: 'Nombre debe de tener entre 2 a 45 caracteres'
                }
            }
        },
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: ({ msg: 'Apellido no puede estar vacio'}),
                len: {
                    args: [2, 45],
                    msg: 'Apellido debe de tener entre 2 a 45 caracteres'
                }
            }
        },
        direccion: {
            type: DataTypes.STRING(45),
            allowNull: true,
            validate: {
                len: {
                    args: [0,45],
                    msg: 'Dirección no debe exceder de 45 caracteres'
                }
            }
        },
        edad:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: ({ msg: 'Edad no puede estar vacio'}),
                min: {
                    args: [1],
                    msg: 'Edad debe ser mayor a 0'
                },
                max: {
                    args: [120],
                    msg: 'Edad no puede ser mayor a 120'
                }
            }
        },
        profesion: {
            type: DataTypes.STRING(45),
            allowNull: true,
            validate: {
                len: {
                    args: [0,45],
                    msg: 'Profesión no debe exceder de 45 caracteres'
                }
            }
        },
        estadoCivil: {
            type: DataTypes.STRING(45),
            allowNull: true,
            validate: {
                len: {
                    args: [0,45],
                    msg: 'Estado civil no debe exceder de 45 caracteres'
                }
            }
        }
    },
    {
        tableName: 'colaboradores',
        timestamps: false
    }
); 
