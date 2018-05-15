import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './Device.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DeviceComponent ],
    exports: [ DeviceComponent ],
})

export class DeviceModule {}
