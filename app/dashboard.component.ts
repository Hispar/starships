import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Ship } from './ship';
import { ShipService } from './ship.service';

import { ShipFocusComponent } from './ship-focus.component.ts'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    //styleUrls: ['app/css/dashboard.component.css']
    directives: [ShipFocusComponent]
})
export class DashboardComponent implements OnInit {
    ships:Ship[] = [];

    constructor(
        private _router: Router,
        private _shipService: ShipService) {
    }

    ngOnInit() {
        this._shipService.getShips()
            .then(ships => this.ships = ships.slice(0, 8));
    }

    gotoDetail(ship) {
        let link = ['ShipDetail', { id: ship.id }];
        this._router.navigate(link);
    }
}