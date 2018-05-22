import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Device} from 'app/Datamodel/Device';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {forEach} from '@angular/router/src/utils/collection';

class Device_Type {
    name: string;
    id: number;
}

@Injectable()
export class DeviceService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint_Device = 'http://localhost:8182/customerdevice/';
    private APIEndpoint_DeviceType = 'http://localhost:8182/devicetype/';

    // Inject the http client into the service
    constructor(private http: Http) {
    }

    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.

    AssociateDevice(Device) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        Device = JSON.stringify(Device);
        console.log(Device);
        const aux = this.http.post(this.APIEndpoint_Device, Device, {headers: headers})
            .map(this.parseData);
        return aux;
    }

    getDeviceTypes() {
        const aux = this.http.get(this.APIEndpoint_DeviceType)
            .map(this.parseDeviceTypeResponse);
        console.log(aux);
        return aux;
    }

    parseDeviceTypeResponse(response) {


        const parsedResponse = response.json();
        const deviceTypes = Array<Device_Type>();

        for (let deviceT of parsedResponse) {
            const deviceType = new Device_Type();
            deviceType.id = parseInt(deviceT.id);
            deviceType.name = deviceT.name;
            deviceTypes.push(deviceType);
        }


        return deviceTypes;
    }

// This method parses the result data to JSON
    private parseData(res: Response) {
        if (Response) {
            alert('Device added with success');
        }
        return res.json();
    }
}
