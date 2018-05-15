import { Component } from '@angular/core';
import {log} from 'util';
import {TestpageService} from './testpage.service';
import {Customer} from 'app/Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'testpage',
    moduleId: module.id,
    templateUrl: 'testpage.component.html'
})

export class TestpageComponent {

    Username= '';
    name = '';
    telephone;
    residence = '';
    result;

    customer = new Customer();

    // Inject the TestpageService in the component's constructor
    constructor(private testpage: TestpageService) {}

    onClickCustomer() {
        this.customer.userName = this.Username;
        this.customer.name = this.name;
        this.customer.residence = this.residence;
        this.customer.telephone = this.telephone;
        console.log(this.customer);
        this.testpage.insertCustomer(this.customer).subscribe();
    }
}
