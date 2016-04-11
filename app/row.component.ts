import { Component, Input } from 'angular2/core';
import { ShipComponent } from './ship.component';

@Component({
    selector: 'row',
    template: `
    <div class="row">
      <ship *ngFor="#ship of row" [ship]="ship"></ship>
    </div>
  `,
    directives: [ShipComponent]
})
export class RowComponent {
    @Input() row: any;
}