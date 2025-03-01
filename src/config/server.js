'use strict'

import express from 'express';
import cors from 'cors';
import { dbConnection } from '../config/dbConnection.js'
import colaboradorRoutes from '../routes/colaborador.routes.js'
import morgan from 'morgan';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000
        this.colaboradorPath = '/prueba-tec/v1/'

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"))
    }

    routes(){
        this.app.use(this.colaboradorPath, colaboradorRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;