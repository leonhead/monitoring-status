import dotenv from 'dotenv';
import express from 'express';
import MonitoringRouter from './router/MonitoringRouter';

require('dotenv').config()

class Server {
    public app = express();
    public router = MonitoringRouter;
}

const server = new Server();
const port = process.env.APP_PORT;

server.app.use('/api', server.router);
server.app.listen(port);
