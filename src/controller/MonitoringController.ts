import MonitoringService from '../services/MonitoringService';


class MonitoringController {

    private monitoringService = MonitoringService;

    getStatusOfServers() {
        return this.monitoringService.getStatusOfServers();
    };

    addServerFromMonitoring(url: string) {
        this.monitoringService.addServerToMonitor(url);
        return {
            sever: url
        }
    }

    removeServerFromMonitoring(url: string) {
        this.monitoringService.removeServerFromMonitor(url);
        return {
            sever: url
        }
    }
}

export = new MonitoringController();
