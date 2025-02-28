import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

export const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error('Error al conectarse a la base de datos.', error)
        process.exit(1)
    }
};
