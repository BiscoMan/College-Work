import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ TestpageComponent ],
    exports: [ TestpageComponent ],
})

export class TestpageModule {}
