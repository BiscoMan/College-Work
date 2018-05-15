import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetDevicesComponent } from './GetDevices.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ GetDevicesComponent ],
    exports: [ GetDevicesComponent ],
})

export class GetDevicesModule {}
