import { Component } from '@angular/core';
import {log} from 'util';
import {DeviceService} from './Device.service';
import {Device} from 'app/Datamodel/Device';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'device',
    moduleId: module.id,
    templateUrl: 'Device.component.html'
})

export class DeviceComponent {
    device_serialNumber;
    device_deviceType;
    device_model = '';
    device_friendlyName = '';
    device_username = '';
    deviceTypes;
    result;

    device_db = new Device();

    // Inject the TestpageService in the component's constructor
    constructor(private device: DeviceService) {
        this.device.getDeviceTypes().subscribe(types => {console.log(types); this.deviceTypes = types});
    }

    onClickDevice() {
        this.device_db.serialNumber = this.device_serialNumber;
        this.device_db.model = this.device_model;
        this.device_db.friendlyName = this.device_friendlyName;
        this.device_db.username = this.device_username;
        this.device_db.deviceType = this.device_deviceType;
        console.log(this.device_db);
        this.device.AssociateDevice(this.device_db).subscribe();
    }
}
