import { Component } from '@angular/core';
import {log} from 'util';
import {TestpageService} from './testpage.service';
import {HttpClient} from '@angular/common/http';
import {printLine} from 'tslint/lib/test/lines';

@Component({
    selector: 'testpage',
    moduleId: module.id,
    templateUrl: 'testpage.component.html'
})

export class TestpageComponent {
    // Inject the TestpageService in the component's constructor
    constructor(private testpage: TestpageService) {

    }
     result;

    onClickDB() {
        this.testpage.createDB().subscribe(data => this.result = data);
        return this.result;
    }
}
