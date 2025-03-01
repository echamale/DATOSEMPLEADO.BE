import { sequelize } from './db.js';
import { models } from '../models/models.js';

export const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos')
        Object.values(models).forEach((model) => {
            new model(sequelize);
        });
        await sequelize.sync({force: false});
        console.log("sincronizacion correcta")

    } catch (error) {
        console.error('Error al conectarse a la base de datos.', error)
        process.exit(1)
    }
};