import { Component } from '@angular/core';
import {log} from 'util';
import {DeviceStateService} from './DeviceState.service';
import {Device_State} from 'app/Datamodel/Device_State';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'devicestate',
    moduleId: module.id,
    templateUrl: 'DeviceState.component.html'
})

export class DeviceStateComponent {
    device_SerialNumber;
    device_state;
    device_error;
    device_energyProduction;
    result;

    device_db = new Device_State();

    // Inject the TestpageService in the component's constructor
    constructor(private devicestate: DeviceStateService) {

    }

    onClickDeviceState() {
        this.device_db.SerialNumber = this.device_SerialNumber;
        this.device_db.state = this.device_state;
        this.device_db.error = this.device_error;
        this.device_db.energyProduction = this.device_energyProduction;
        console.log(this.device_db);
        this.devicestate.OperateDevice(this.device_db).subscribe();
    }
}
