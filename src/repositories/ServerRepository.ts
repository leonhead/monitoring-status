class ServerRepository {

    private servers: Array<string> = [];

    constructor() {
        this.addServer('http://127.0.0.1:8080')
        this.addServer('http://127.0.0.1:80')
    }

    addServer(url: string){
        this.servers.push(url);
    }

    removeServer(url: string){
        this.servers = this.servers.filter(e => e !== url);
    }

    get getServers(){
        return this.servers;
    }
}

export = new ServerRepository();
