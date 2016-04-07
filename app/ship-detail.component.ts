import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component({
    selector: 'ship-detail',
    templateUrl: 'app/templates/ship-detail.component.html',
    //styleUrls: ['app/css/dashboard.component.css']
})
export class ShipDetailComponent implements OnInit {
    @Input()
        ship:Ship;

    constructor(private _shipService:ShipService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._shipService.getShip(id)
            .then(ship => this.ship = ship);
    }

    goBack() {
        window.history.back();
    }
}