import { Component } from '@angular/core';
import {log} from 'util';
import {DeviceListService} from './devicelist.service';
import { Customer } from 'app/Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';
import {Device} from 'app/Datamodel/Device';
import { State } from 'app/Datamodel/state';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'devicelist',
    moduleId: module.id,
    templateUrl: 'devicelist.component.html'
})

export class DeviceListComponent {

    serialNumber;
    headerRow = ['Time', 'State', 'Error', 'Energy Production'];
    devicesHistory;

    // Inject the TestpageService in the component's constructor
    constructor(private devicelist: DeviceListService) {

    }
    onClickGetDeviceList() {
        this.devicelist.getDeviceHistory(this.serialNumber).map(this.parseDeviceResponse).subscribe(res => this.devicesHistory = res);
    }

    parseDeviceResponse(response) {
        const devicesState = Array<Array<String>>();

        for ( let i = 0; i < response.length; i += 4) {
            const deviceState = [response[i], response[i + 1], response[i + 2], response[i + 3]];
            console.log(response[i]);
            devicesState.push(deviceState);
        }
        return devicesState;
    }

}
