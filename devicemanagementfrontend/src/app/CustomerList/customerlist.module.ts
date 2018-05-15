import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customerlist.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ CustomerListComponent ],
    exports: [ CustomerListComponent ],
})

export class CustomerListModule {}
