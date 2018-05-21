import { Component } from '@angular/core';
import {log} from 'util';
import {CustomerListService} from './customerlist.service';
import { Customer } from 'app/Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';
import {Device} from 'app/Datamodel/Device';
import { State } from 'app/Datamodel/state';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'customerlist',
    moduleId: module.id,
    templateUrl: 'customerlist.component.html'
})

export class CustomerListComponent {

    Username;
    headerRow = ['Time', 'Serial Number', 'Error', 'State', 'Energy Production', 'Device Type'];
    devices_state;

    // Inject the TestpageService in the component's constructor
    constructor(private customerlist: CustomerListService) {

    }
    onClickGetCustomerList() {
        this.customerlist.getCustomerHistory(this.Username).map(this.parseDeviceResponse).subscribe(res => this.devices_state = res);
    }

    parseDeviceResponse(response) {
        const devices_state = Array<Array<String>>();

        for ( let i = 0; i < response.length; i += 6) {
            const device_state = [response[i], response[i + 1], response[i + 2], response[i + 3], response[i + 4], response[i + 5]];
            devices_state.push(device_state);
        }
        return devices_state;
    }

}
