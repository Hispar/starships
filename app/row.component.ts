import { Component, Input } from 'angular2/core';
import { ShipComponent } from './ship.component';

@Component({
    selector: 'row',
    template: `
      <ship *ngFor="#ship of row" [ship]="ship"></ship>
  `,
    directives: [ShipComponent]
})
export class RowComponent {
    @Input() row: any;
}