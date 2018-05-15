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
    headerRow = ['Serial Number', 'Friendly Name', 'States'];
    devices_state;

    // Inject the TestpageService in the component's constructor
    constructor(private customerlist: CustomerListService) {

    }
    onClickGetCustomerList(){
        this.customerlist.getCustomerHistory(this.Username).map(this.parseDeviceResponse).subscribe(res => this.devices_state = res);
    }

    parseDeviceResponse(response){
        const devices_state = Array<Array<String>>();

        for ( let i = 0; i < response.length; i += 2)
        {
            const device_state = [response[i], response[i + 1]];
            devices_state.push(device_state);
        }
        return devices_state;
    }

}
