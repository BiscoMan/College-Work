import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Device} from 'Datamodel/Device';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint_Device = 'http://localhost:8182/customerdevice/';
    // Inject the http client into the service
    constructor(private http: Http) {}
    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.

    insertDevice(Device) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        headers.append('Acess-Control-Allow-Origin', '*' );
        Device = JSON.stringify(Device);
        const aux = this.http.post(this.APIEndpoint_Device, Device, {headers: headers})
                        .map(this.parseData);
        return aux;
    }

    // This method parses the result data to JSON
    private parseData(res: Response)  {
        return res.json();
    }
}
