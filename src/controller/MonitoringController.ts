import MonitoringService from '../services/MonitoringService';

class MonitoringController {

    private monitoringService = MonitoringService;

    statusOfServers() {
        const serverStatus = this.monitoringService.getStatusOfServers();
        return {
            servers: serverStatus
        }
    }

    addServerFromMonitoring(url: string){
        this.monitoringService.addServerToMonitor(url);
        return {
            sever: url
        }
    }

    removeServerFromMonitoring(url: string){
        this.monitoringService.removeServerFromMonitor(url);
        return {
            sever: url
        }
    }
}

export = new MonitoringController();
