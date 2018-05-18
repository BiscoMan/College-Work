import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TestpageComponent ],
    exports: [ TestpageComponent ],
})

export class TestpageModule {}
