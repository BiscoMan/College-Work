import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {OperateComponent} from './Operate.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ OperateComponent ],
    exports: [ OperateComponent ],
})

export class OperateModule {}
