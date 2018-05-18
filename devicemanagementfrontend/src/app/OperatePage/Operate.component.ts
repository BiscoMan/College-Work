import { Component } from '@angular/core';
import {log} from 'util';
import {OperateService} from './Operate.service';
import {Customer} from 'Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'Operatepage',
    moduleId: module.id,
    templateUrl: 'testpage.component.html'
})

export class OperateComponent {

    Username= '';
    name = '';
    telephone;
    residence = '';
    result;

    customer = new Customer();

    // Inject the TestpageService in the component's constructor
    constructor(private operatepage: OperateService) {

    }
}
