import { Component } from '@angular/core';
import {log} from 'util';
import {CreatedbService} from './createdb.service';
import {Customer} from 'app/Datamodel/Customer';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'createdb',
    moduleId: module.id,
    templateUrl: 'createdb.component.html'
})


export class CreatedbComponent {
    result;
    // Inject the TestpageService in the component's constructor
    constructor(private createdb: CreatedbService) {

    }

    onClickDB() {
        this.createdb.createDB().subscribe(data => this.result = data);
        console.log('Data base has been created.');
        return this.result;
    }
}
