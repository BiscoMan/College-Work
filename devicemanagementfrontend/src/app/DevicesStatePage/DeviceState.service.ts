import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {State} from 'app/Datamodel/state';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceStateService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint_DeviceState = 'http://localhost:8182/device/';
    // Inject the http client into the service
    constructor(private http: Http) {}
    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.

    OperateDevice(Device_State) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        headers.append('Access-Control-Allow-Origin', '*' );
        Device_State = JSON.stringify(Device_State);
        console.log(Device_State);
        const aux = this.http.post(this.APIEndpoint_DeviceState, Device_State, {headers: headers})
                        .map(this.parseData);
        return aux;
    }

    // This method parses the result data to JSON
    private parseData(res: Response)  {
        return res.json();
    }
}
