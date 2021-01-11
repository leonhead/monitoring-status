import ServerRepository from '../repositories/ServerRepository';
import '../model/ServerStatus';
import {ServerStatus} from "../model/ServerStatus";
import {AxiosResponse, AxiosError} from "axios";

class MonitoringService {

    private repository = ServerRepository;

    addServerToMonitor(url: string) {
        this.repository.addServer(url);
    }

    removeServerFromMonitor(url: string) {
        this.repository.removeServer(url);
    }

    getStatusOfServers() {
        const servers = this.repository.getServers;
        let statusList: Array<ServerStatus> = [];
        servers.forEach(server => {
            let status = this.getStatusOfServer(server);
            statusList.push(status);
        })
        return statusList;
    }

    async getStatusOfServer(url: string) {
        const axios = require('axios');
        axios.get(url)
            .then((response: AxiosResponse) => {
                return new ServerStatus(url, response.status.toString(), response.statusText)
            })
            .catch((error: AxiosError) => {
                const errorCode:string = error.code as string;
                return new ServerStatus(url, errorCode, error.message)
            });
    }
}

export = new MonitoringService();
