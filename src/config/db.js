import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config

export const dbConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAMW,
        });

        console.log('Conectado a la base de datos.')
        return connection;
    } catch (error) {
        console.error('Error al conectarse a la base de datos.', error)
        process.exit(1)
    }
};
