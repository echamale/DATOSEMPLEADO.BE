import { config } from 'dotenv';
config();

import Server from './src/config/server.js'

const server = new Server();
server.listen();