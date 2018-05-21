import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './devicelist.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DeviceListComponent ],
    exports: [ DeviceListComponent ],
})

export class DeviceListModule {}
