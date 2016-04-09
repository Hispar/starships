import { Component } from 'angular2/core';

import { ShipFocus } from './ship-focus';
import { ShipFocusService } from './ship-focus.service.ts';


@Component({
    selector: 'shipocus',
    template: '<label>focus: </label>{{getShipFocus(focus_id)}}'
    //styleUrls: ['app/heroes.component.css'],
    //directives: [HeroDetailComponent]
})
export class ShipFocusComponent {
    shipfocus:ShipFocus[];

    constructor(
        private _shipfocusService: ShipFocusService) { }

    getShipFocus(id:number) {
        this._shipfocusService.getShipFocus(id)
            .then(shipfocus => this.shipfocus = shipfocus);
    }
}