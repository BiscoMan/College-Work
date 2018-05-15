import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreatedbComponent } from './createdb.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ CreatedbComponent ],
    exports: [ CreatedbComponent ],
})

export class CreatedbModule {}
