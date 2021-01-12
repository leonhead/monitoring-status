import React from 'react';
import axios from "axios";
import update from 'immutability-helper';
import ServerStatus from "./ServerStatus";

class ServerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            servers: [],
        };
    }

    async componentDidMount() {
        const { data } = await axios.get('http://localhost:3300/api/status');
        this.createServers(data);

    }

    createServers(data){
        const servers = [];
        console.log(data)
        data.forEach((server) => {
            const serverStatus = new ServerStatus(server.host, server.status, server.message);
            servers.push(serverStatus);
        });
        this.setState(state =>
            update(state, {
                servers: { $set: servers },
            })
        );
    }

    render() {
        return (
            <div>
                <h1>test</h1>
                <h1>{this.state.servers}</h1>
                <table>
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }


}

export default ServerList;
