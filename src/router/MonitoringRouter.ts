import {Router} from "express";
import MonitoringController from '../controller/MonitoringController'
import axios from "axios";

class MonitoringRouter {

    private router = Router();
    private controller = MonitoringController;

    constructor() {
        this.configureRoutes();
    }

    private configureRoutes() {
        this.router.get('/status', async (request, response) => {
            const result = this.controller.getStatusOfServers().then(e => {
                return response.status(200).json(e);
            });
        });

        this.router.post('/status/remove', (request, response) => {
            const url: string = request.query.url as string;
            const result = this.controller.removeServerFromMonitoring(url);
            response.status(200).json(result)
        });

        this.router.post('/status/add', (request, response) => {
            const url: string = request.query.url as string;
            const result = this.controller.addServerFromMonitoring(url);
            response.status(200).json(result)
        });
    }

    get getRouter() {
        return this.router;
    }
}

export = new MonitoringRouter().getRouter;
