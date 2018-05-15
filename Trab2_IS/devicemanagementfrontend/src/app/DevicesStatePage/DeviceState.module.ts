import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceStateComponent } from './DeviceState.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DeviceStateComponent ],
    exports: [ DeviceStateComponent ],
})

export class DeviceStateModule {}
