import { Component } from '@angular/core';
import {log} from 'util';
import {GetDevicesService} from './GetDevices.service';
import {Customer} from 'app/Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';
import {Device} from '../Datamodel/Device';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'getdevice',
    moduleId: module.id,
    templateUrl: 'GetDevices.component.html'
})

export class GetDevicesComponent {

    Username;
    headerRow = ['Serial Number', 'Friendly Name']
    devices;

    // Inject the TestpageService in the component's constructor
    constructor(private getdevice: GetDevicesService) {

    }
    onClickGetDevices() {
        this.getdevice.getDevices(this.Username).map(this.parseDeviceResponse).subscribe(res => this.devices = res);
    }

    parseDeviceResponse(response) {
        const devices = Array<Array<String>>();

       for ( let i = 0; i < response.length; i += 2) {
           const device = [response[i], response[i + 1]];
           devices.push(device);
       }
       return devices;
    }

}
