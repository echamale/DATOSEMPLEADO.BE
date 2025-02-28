'use strict'

import express from 'express';
import cors from 'cors';
import { dbConnection } from '../config/db.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000
        
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        this.db = await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;