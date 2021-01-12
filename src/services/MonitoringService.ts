import ServerRepository from '../repositories/ServerRepository';
import '../model/ServerStatus';
import {ServerStatus} from "../model/ServerStatus";
import axios, {AxiosError} from "axios";
import {AxiosResponse} from 'axios'

class MonitoringService {

    private repository = ServerRepository;

    addServerToMonitor(url: string) {
        this.repository.addServer(url);
    }

    removeServerFromMonitor(url: string) {
        this.repository.removeServer(url);
    }

    getStatusOfServers = async () => {
        const servers = this.repository.getServers;
        let statusList: Array<ServerStatus> = [];

        const axios = require('axios');
        await Promise.all(servers.map(server =>
            axios.get(server).then((response: AxiosResponse) => {
                let status = new ServerStatus(server, response.status, response.statusText);
                statusList.push(status);
            }).catch((error: AxiosError) => {
                if (error.response) {
                    let status = new ServerStatus(server, error.response.status, error.response.statusText);
                    statusList.push(status);
                } else {
                    let status = new ServerStatus(server, 404, error.code!);
                    statusList.push(status);
                }
            })
        ));

        return statusList;
    }
}

export = new MonitoringService();
