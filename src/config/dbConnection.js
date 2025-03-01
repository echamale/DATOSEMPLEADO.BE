import { sequelize } from './db.js';
import { Colaborador } from '../colaborador/colaboradorModel.js';

export const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos')
        const ColaboradorModel = Colaborador(sequelize);
        await sequelize.sync({force: false});
        console.log("sincronizacion correcta")

    } catch (error) {
        console.error('Error al conectarse a la base de datos.', error)
        process.exit(1)
    }
};