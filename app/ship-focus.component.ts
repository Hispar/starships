import { Component } from 'angular2/core';

import { ShipFocus } from './ship-focus';
// import { ShipFocusService } from './ship-focus.service.ts';


@Component({
    selector: 'ship-focus',
    template: `<div *ngIf="focuslist">
a{{focuslist}}b
        <div *ngFor="#focus of focuslist" class="col-lg-3">
            {{ focus.name }}
        </div>
    </div>
    `
})
export class ShipFocusComponent {
    focuslist:ShipFocus[];
    // focus:ShipFocus;
    //
    // constructor(
    //     private _shipfocusService: ShipFocusService) { }
    //
    // getShipFocus(id:number) {
    //     this._shipfocusService.getShipFocus(id)
    //         .then(shipfocus => this.shipfocus = shipfocus);
    // }
}