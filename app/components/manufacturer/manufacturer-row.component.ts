import { Component, Input } from 'angular2/core';
import { ManufacturerComponent } from './manufacturer.component';

@Component({
    selector: 'manufacturer-row',
    template: `<manufacturer *ngFor="#manufacturer of row" [manufacturer]="manufacturer"></manufacturer>`,
    directives: [ManufacturerComponent]
})
export class ManufacturerRowComponent {
    @Input() row:any;
}